import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import { AuthContext } from '../contexts/AuthContext';

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
  const { token, setAuth } = useContext(AuthContext);
  return (
    <RootStack.Navigator>
      {token ? (
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
  );
};
