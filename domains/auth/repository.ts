import { useState, useEffect } from "react";
import {
  User,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseApp } from "lib/firebase";
import { useGetAdminQuery } from "lib/graphql/generated";
import { Admin } from "./entity";
import { RequestClient } from "./valueObject";

export type AuthState = {
  admin: Admin | null;
  client: RequestClient;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  isLoading: boolean;
  isError: boolean;
  isFirebaseError: boolean;
  isGetAdminError: boolean;
  getAdminError: any;
};

const auth = getAuth(firebaseApp);
auth.languageCode = "ja";
const provider = new GoogleAuthProvider();

export function useAuth(): AuthState {
  const [client, setClient] = useState(RequestClient.anonymouse());
  const [isLoading, setIsLoading] = useState(true);
  const [isFirebaseError, setIsFirebaseError] = useState(false);

  const getAdmin = useGetAdminQuery(
    client.graphQLClient,
    {
      id: client.firebaseId || "",
    },
    {
      enabled: client.firebaseId !== null,
    }
  );

  const prepare = async (user: User | null) => {
    if (user) {
      const token = await user.getIdToken();
      setClient(
        RequestClient.generate({
          firebaseId: user.uid,
          token,
        })
      );
    } else {
      setClient(RequestClient.anonymouse());
    }
  };

  useEffect(() => {
    prepare(auth.currentUser).catch(() => {
      setIsFirebaseError(true);
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);
      setIsFirebaseError(false);

      prepare(user).catch(() => {
        setIsFirebaseError(true);
      });

      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (getAdmin.failureCount > 0) {
      if (!auth.currentUser) {
        signOut();
      } else {
        prepare(auth.currentUser).catch(() => signOut());
      }
    }
  }, [getAdmin.failureCount]);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await prepare(userCredential.user);
    } catch (e: any) {
      setIsFirebaseError(true);
    }
  };

  const signOut = () => {
    setIsFirebaseError(false);
    setClient(RequestClient.anonymouse());
    auth.signOut();
  };

  return {
    admin: getAdmin.data?.admin_by_pk
      ? Admin.generate({ id: getAdmin.data.admin_by_pk.id })
      : null,
    client,
    signIn,
    signOut,
    isLoading,
    isError: isFirebaseError || getAdmin.isError,
    isFirebaseError,
    isGetAdminError: getAdmin.isError,
    getAdminError: getAdmin.error,
  };
}
