import { createContext } from 'react';

export type AuthContextState = {
  token?: string;
  setAuth(token: string): Promise<void> | null;
};

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);
