import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/Navigator';
import FormInputField from '../components/FormInputField';

type SignInForm = {
  mail: string;
  password: string;
};

const signInFormValidationSchema = Yup.object().shape({
  mail: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string().required('Password is required'),
});

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: yupResolver(signInFormValidationSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: SignInForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Sign Up instead"
        onPress={() => navigation.navigate('SignUp')}
      />

      <Text>Email</Text>
      <FormInputField control={control} name="mail" placeholder="Email" />

      <Text>Password</Text>
      <FormInputField
        control={control}
        name="password"
        placeholder="Password"
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
