import { createContext, useContext } from 'react';

export type User = {
  name: string;
  surname: string;
  email: string;
  balance: number;
};

type AuthContextValue = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextValue | null>(null);


export const useAuth = () => {
  return useContext(AuthContext)
}
