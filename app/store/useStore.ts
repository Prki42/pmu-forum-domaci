import create, { GetState, SetState } from 'zustand';
import createAuthSlice from './createAuthSlice';

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createAuthSlice(set, get),
});

const useStore = create(createRootSlice);

export default useStore;
