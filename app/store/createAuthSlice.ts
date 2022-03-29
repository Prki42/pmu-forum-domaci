import { StoreSlice } from './helpers';
import http from '../lib/http';
import { apiEndpoints, SignInFormData, SignInResponse } from '../lib/api';
import * as SecureStore from 'expo-secure-store';

export type AuthSlice = {
  token: string;
  isLoggedIn: boolean;
  hasAuthError: boolean;
  isInitTokenGet: boolean;
  doneInitTokenGet: () => void;
  setToken: (t: string) => void;
  login: (userData: SignInFormData) => void;
  logout: () => void;
};

const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  token: '',
  isLoggedIn: false,
  hasAuthError: false,
  isInitTokenGet: true,
  doneInitTokenGet: () => {
    set((state) => ({ ...state, isInitTokenGet: false }));
  },
  setToken: async (t) => {
    set((state) => ({
      ...state,
      token: t,
      isLoggedIn: true,
    }));
    try {
      await SecureStore.setItemAsync('token', t);
    } catch (err) {
      console.log(err);
    }
  },
  login: async (userData) => {
    try {
      const resp = await http.post<SignInResponse>(
        apiEndpoints.users,
        userData
      );
      get().setToken(resp.data.token);
      set((state) => ({ ...state, hasAuthError: false }));
    } catch (err) {
      console.log(err);
      set((state) => ({ ...state, isLoggedIn: false, hasAuthError: true }));
    }
  },
  logout: async () => {
    set((state) => ({ ...state, token: '', isLoggedIn: false }));
    try {
      await SecureStore.deleteItemAsync('token');
    } catch (err) {
      console.log(err);
    }
  },
});

export default createAuthSlice;
