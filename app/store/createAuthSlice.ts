import { StoreSlice } from './helpers';
import { SignInResponse, UserData } from '../lib/api';

export type AuthSlice = {
  _hasHydrated: boolean;
  setHasHydrated: (h: boolean) => void;

  token: string | undefined;
  isLoggedIn: boolean;

  hasAuthError: boolean;
  authError: string | undefined;

  userData: UserData | undefined;

  setToken: (t: string) => void;
  setUserData: (data: UserData) => void;
  login: (data: SignInResponse) => void;
  loginFail: (err: string) => void;
  logout: () => void;
};

const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  _hasHydrated: false,
  setHasHydrated: (h) => {
    set((state) => ({ ...state, _hasHydrated: h }));
  },

  token: '',
  isLoggedIn: false,

  userData: undefined,

  hasAuthError: false,
  authError: undefined,

  setToken: (t) => {
    set((state) => ({
      ...state,
      token: t,
      isLoggedIn: true,
    }));
  },
  login: (data) => {
    set((state) => ({
      ...state,
      token: data.token,
      isLoggedIn: true,
      hasAuthError: false,
      userData: data.user,
    }));
  },
  loginFail: (err) => {
    set((state) => ({
      ...state,
      isLoggedIn: false,
      hasAuthError: true,
      authError: err,
    }));
  },
  logout: () => {
    set((state) => ({
      ...state,
      token: '',
      isLoggedIn: false,
      hasAuthError: false,
    }));
  },
  setUserData: (data) => {
    set((state) => ({
      ...state,
      userData: data,
    }));
  },
});

export default createAuthSlice;
