import React, { useState } from 'react';
import { Field } from 'formik';
import { InputField, InputIcon } from 'components/pages/auth/components/AuthForm/styled';
import EyeIcon from 'public/images/icons/eye.svg';
import EyeHideIcon from 'public/images/icons/eye-close.svg';
import theme from 'public/theme';

type PasswordInputProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  isSubmitting: boolean;
  hasError: boolean;
  actions: object;
  placeholder: string;
};

const PasswordInput = ({ name, isSubmitting, hasError, actions, placeholder }: PasswordInputProps) => {
  const [inputType, setInputType] = useState('password');
  const isPasswordHidden = inputType === 'password';

  const togglePassword = () => {
    setInputType(isPasswordHidden ? 'text' : 'password');
  };

  return (
    <InputField>
      <Field
        type={inputType}
        name={name}
        id={name}
        data-testid={name}
        data-cy={name}
        disabled={isSubmitting}
        placeholder={placeholder}
        style={{ borderColor: hasError && theme.colors.red }}
        {...actions}
      />
      <InputIcon onClick={togglePassword}>{!isPasswordHidden ? <EyeIcon /> : <EyeHideIcon />}</InputIcon>
    </InputField>
  );
};

export default PasswordInput;
