import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/Navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>SignUp</Text>
    </SafeAreaView>
  );
};

export default SignUp;
