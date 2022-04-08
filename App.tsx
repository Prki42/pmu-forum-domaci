import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './app/navigation/Navigator';
import useStore from './app/store/useStore';
import { injectStore } from './app/lib/http';

injectStore(useStore);

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
