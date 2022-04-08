import { GetState, SetState } from 'zustand';
import { StateStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

// https://github.com/pmndrs/zustand/wiki/Splitting-the-store-into-separate-slices
export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T;

export const persistStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return await SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    return await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    return await SecureStore.deleteItemAsync(name);
  },
};
