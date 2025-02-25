import { PropsWithChildren, createContext, useContext, useState } from "react";

interface AuthResponse {
  token: string;
  record: {
    id: string;
  };
}

interface TokenContextProps {
  token: string;
  userId: string;
  setAuth: (auth: AuthResponse) => void;
  clearAuth: () => void;
}

const TokenContext = createContext<TokenContextProps>(undefined);

export default function TokenContextProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string>();
  const [userId, setUserId] = useState<string>();

  const setAuth = (auth: AuthResponse) => {
    setToken(auth.token);
    setUserId(auth.record.id);
  };

  const clearAuth = () => {
    setToken(undefined);
    setUserId(undefined);
  };

  const value: TokenContextProps = {
    token,
    userId,
    setAuth,
    clearAuth,
  };
  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}

export function useTokenContext() {
  const context = useContext<TokenContextProps>(TokenContext);
  if (context === undefined) {
    throw new Error("this hook must be used inside context!");
  }
  return context;
}
