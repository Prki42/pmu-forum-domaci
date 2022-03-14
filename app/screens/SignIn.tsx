import React, { useContext } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../navigation/Navigator';
import FormInputField from '../components/FormInputField';
import { AuthContext } from '../contexts/AuthContext';
import {
  apiEndpoints,
  apiUrl,
  SignInForm,
  signInFormValidationSchema,
} from '../lib/api';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: yupResolver(signInFormValidationSchema),
    mode: 'onTouched',
  });

  const { setAuth } = useContext(AuthContext);

  const onSubmit = (data: SignInForm) => {
    axios
      .post(apiUrl + apiEndpoints.users, data)
      .then((resp) => setAuth(resp.data.token))
      .catch(() => {});
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
