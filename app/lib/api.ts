import * as Yup from 'yup';

export const apiUrl = 'https://teslachatapp.herokuapp.com/api';
export const apiEndpoints = {
  users: '/users',
};

export type SignInFormData = {
  username: string;
  password: string;
};

export const signInFormValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export type SignUpFormData = {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
};

export const signUpFormValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().required('Email is required').email(),
});

export type UserData = {
  userId: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  picture: string;
};

export type SignInResponse = {
  success: string;
  token: string;
  user: UserData;
};

export type GetUserInfoResponse = {
  success: string;
  user: UserData;
};
