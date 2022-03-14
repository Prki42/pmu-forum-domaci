import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './app/navigation/Navigator';
import AuthProvider from './app/providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
