import React, { useState, ReactNode } from 'react';
import {AuthContext, User} from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  
  const [user, setUser] = useState<User>({} as User);

  const userDataString = localStorage.getItem('user');
  const userData = JSON.parse(userDataString ?? "[]");
  userData.balance = 300000;
  localStorage.setItem('user', JSON.stringify(userData));



  const handleLogin = () => {
  }
  

  const handleLogout = () => {
    
  }

  const value = {
    user,
    login: handleLogin,
    logout: handleLogout,
    userData
};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
