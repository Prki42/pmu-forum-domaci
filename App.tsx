import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './app/navigation/Navigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
