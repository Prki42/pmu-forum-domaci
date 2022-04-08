import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../navigation/Navigator';
import FormInputField from '../components/FormInputField';
import {
  apiEndpoints,
  SignInFormData,
  signInFormValidationSchema,
  SignInResponse,
} from '../lib/api';
import useStore from '../store/useStore';
import http from '../lib/http';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormValidationSchema),
    mode: 'onTouched',
  });

  const login = useStore((state) => state.login);
  const loginFail = useStore((state) => state.loginFail);
  const hasLoginFailed = useStore((state) => state.hasAuthError);
  const loginErr = useStore((state) => state.authError);

  const [isLoggingIn, setIsLogginIn] = useState<boolean>(false);

  const onSubmit = async (data: SignInFormData) => {
    setIsLogginIn(true);
    try {
      const resp = await http.post<SignInResponse>(apiEndpoints.users, data);
      login(resp.data);
    } catch (err) {
      console.log(err);
      loginFail('Login failed');
    }
    setIsLogginIn(false);
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

      {isLoggingIn ? (
        <Text>Loggin in...</Text>
      ) : (
        hasLoginFailed && <Text>{loginErr}</Text>
      )}
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
