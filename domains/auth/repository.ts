import { useState, useEffect } from "react";
import {
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);
      setIsFirebaseError(false);

      if (user) {
        try {
          const token = await user.getIdToken();
          setClient(
            RequestClient.generate({
              firebaseId: user.uid,
              token,
            })
          );
        } catch (e) {
          setIsFirebaseError(true);
          setClient(RequestClient.anonymouse());
        }
      } else {
        setClient(RequestClient.anonymouse());
      }

      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (getAdmin.failureCount > 2) {
      (async () => {
        if (auth.currentUser) {
          try {
            const token = await auth.currentUser.getIdToken();

            setClient(
              RequestClient.generate({
                firebaseId: auth.currentUser.uid,
                token,
              })
            );

            setIsFirebaseError(false);
          } catch {
            signOut();
          }
        } else {
          signOut();
        }
      })();
    }
  }, [getAdmin.isError]);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();

      setClient(
        RequestClient.generate({
          firebaseId: userCredential.user.uid,
          token,
        })
      );
      setIsFirebaseError(false);
    } catch (e: any) {
      setClient(RequestClient.anonymouse());
      setIsFirebaseError(true);
    }
  };

  const _signIn = async () => {
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      setClient(
        RequestClient.generate({
          firebaseId: result.user.uid,
          token,
        })
      );
      setIsFirebaseError(false);
    } catch (e: any) {
      setClient(RequestClient.anonymouse());
      setIsFirebaseError(true);
    }

    setIsLoading(false);
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
