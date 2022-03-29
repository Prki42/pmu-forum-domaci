import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './app/navigation/Navigator';
import useStore from './app/store/useStore';
import * as SecureStore from 'expo-secure-store';
import { injectStore } from './app/lib/http';

injectStore(useStore);

export default function App() {
  const setToken = useStore((state) => state.setToken);
  const finishedGettingtoken = useStore((state) => state.doneInitTokenGet);

  useEffect(() => {
    SecureStore.getItemAsync('token').then((resp) => {
      if (resp) {
        setToken(resp);
      }
      finishedGettingtoken();
    });
  }, []);

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
