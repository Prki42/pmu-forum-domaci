import { GetState, SetState } from 'zustand';

// https://github.com/pmndrs/zustand/wiki/Splitting-the-store-into-separate-slices

export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T;
