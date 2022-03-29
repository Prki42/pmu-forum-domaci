import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../navigation/Navigator';
import FormInputField from '../components/FormInputField';
import { SignInFormData, signInFormValidationSchema } from '../lib/api';
import useStore from '../store/useStore';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormValidationSchema),
    mode: 'onTouched',
  });

  const login = useStore((state) => state.login);

  const onSubmit = (data: SignInFormData) => {
    login(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Sign Up instead"
        onPress={() => navigation.navigate('SignUp')}
      />

      <FormInputField
        control={control}
        name="username"
        textInputOptions={{ placeholder: 'Username', autoCapitalize: 'none' }}
      />

      <FormInputField
        control={control}
        name="password"
        textInputOptions={{ placeholder: 'Password', secureTextEntry: true }}
      />

      <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default SignIn;
