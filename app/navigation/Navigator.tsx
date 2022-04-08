import React from 'react';
import { Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import useStore from '../store/useStore';
import { SafeAreaView } from 'react-native-safe-area-context';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AppDrawerkParamList = {
  Profile: undefined;
};

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppDrawer = createDrawerNavigator<AppDrawerkParamList>();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'Sign In' }}
    ></AuthStack.Screen>
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: 'Sign Up' }}
    />
  </AuthStack.Navigator>
);

const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Profile" component={Profile} />
  </AppDrawer.Navigator>
);

export const Navigator: React.FC = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const hasHydrated = useStore((state) => state._hasHydrated);

  return (
    <>
      {!hasHydrated ? (
        <SafeAreaView>
          <Text>Loading token</Text>
        </SafeAreaView>
      ) : (
        <RootStack.Navigator>
          {isLoggedIn ? (
            <RootStack.Screen
              name="App"
              component={AppDrawerScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <RootStack.Screen
              name="Auth"
              component={AuthStackScreen}
              options={{ headerShown: false }}
            />
          )}
        </RootStack.Navigator>
      )}
    </>
  );
};
