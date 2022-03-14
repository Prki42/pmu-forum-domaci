import React, { useEffect, useState } from 'react';
import { AuthContext, AuthContextState } from '../contexts/AuthContext';
import * as SecureStore from 'expo-secure-store';

const AuthProvider: React.FC = ({ children }) => {
  const [token, setTokenState] = useState<string>();

  const getAuthState = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        setTokenState(token);
      } else {
        setTokenState(undefined);
      }
    } catch (error) {
      setTokenState(undefined);
    }
  };

  const setAuth = async (token: string) => {
    try {
      if (token === '') {
        await SecureStore.deleteItemAsync('token');
      }
      await SecureStore.setItemAsync('token', token);
      setTokenState(token);
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
