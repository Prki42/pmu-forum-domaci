import create, { GetState, SetState } from 'zustand';
import createAuthSlice from './createAuthSlice';
import { persist } from 'zustand/middleware';
import { persistStorage } from './helpers';

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createAuthSlice(set, get),
});

const useStore = create(
  persist(createRootSlice, {
    name: 'auth-storage',
    partialize: (state) => ({
      token: state.token,
      isLoggedIn: state.isLoggedIn,
      userData: state.userData,
    }),
    onRehydrateStorage: () => (state) => {
      state?.setHasHydrated(true);
    },
    getStorage: () => persistStorage,
  })
);

export default useStore;
