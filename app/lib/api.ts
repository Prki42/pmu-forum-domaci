import * as Yup from 'yup';

export const apiUrl = 'https://teslachatapp.herokuapp.com/api';
export const apiEndpoints = {
  users: '/users',
};

export type SignInForm = {
  username: string;
  password: string;
};

export const signInFormValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});
