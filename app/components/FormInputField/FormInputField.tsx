import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, TextInputProps } from 'react-native';

import styles from './FormInputField.styles';

type FormInputFieldProps = {
  control: Control<any, any>;
  name: string;
  textInputOptions?: TextInputProps;
};

const FormInputField: React.FC<FormInputFieldProps> = ({
  control,
  name,
  textInputOptions,
}) => {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...textInputOptions}
          />
          <Text>{error?.message}</Text>
        </>
      )}
      name={name}
    />
  );
};

export default FormInputField;
