import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Sign Up' }}
      />
    </RootStack.Navigator>
  );
};
