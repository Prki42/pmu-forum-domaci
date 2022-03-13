import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Text, TextInput } from 'react-native';

import styles from './FormInputField.styles';

type FormInputFieldProps = {
  control: Control<any, any>;
  name: string;
  placeholder: string;
};

const FormInputField: React.FC<FormInputFieldProps> = ({
  control,
  name,
  placeholder,
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
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
          <Text>{error?.message}</Text>
        </>
      )}
      name={name}
    />
  );
};

export default FormInputField;
