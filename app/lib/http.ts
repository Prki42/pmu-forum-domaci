import axios from 'axios';
import { apiUrl } from './api';
import useStore from '../store/useStore';

// https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files

let store: typeof useStore;
export const injectStore = (_store: typeof useStore) => {
  store = _store;
};

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(async (req) => {
  if (!req.headers) {
    throw new Error("Request headers shouldn't be undefined");
  }

  const token = store.getState().token;
  const isLoggedIn = store.getState().isLoggedIn;
  if (isLoggedIn && token != '') {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default http;
