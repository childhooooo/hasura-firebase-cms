import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useAuth, AuthState } from "domains/auth";

export type Store = {
  auth: AuthState;
  busy: {
    isBusy: boolean;
    setIsBusy: Dispatch<SetStateAction<boolean>>;
  };
  popup: {
    content: ReactNode;
    setContent: Dispatch<SetStateAction<ReactNode | null>>;
  };
};

export const StoreContext = createContext({} as Store);

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  const [isBusy, setIsBusy] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  return (
    <StoreContext.Provider
      value={{
        auth: useAuth(),
        busy: { isBusy, setIsBusy },
        popup: { content, setContent },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
