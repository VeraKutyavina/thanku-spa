import React from 'react';
import * as Yup from 'yup';
import { useSignIn } from 'lib/apollo/auth';
import { REQUIRED_FIELD_VALIDATION, VALID_EMAIL_VALIDATION } from 'config/form';

import AuthForm from '../AuthForm';
import { Form, AuthFormWrapper } from './styled'

const SignInForm = () => {
  const [signin] = useSignIn();
  
  const fields = [
    {
      type: 'email',
      name: 'email',
      title: 'Email',
      initialValue: '',
      validationSchema: Yup.string()
        .trim()
        .email(VALID_EMAIL_VALIDATION)
        .required(REQUIRED_FIELD_VALIDATION),
    },
    {
      type: 'password',
      name: 'password',
      title: 'Пароль',
      initialValue: '',
      validationSchema: Yup.string().required(REQUIRED_FIELD_VALIDATION),
    },
  ].filter(Boolean);

  const form = {
    fields,
    submit: signin,
  };
  
  return(
    <AuthFormWrapper>
      <Form>
        <h2>Вход в систему</h2>
        <AuthForm form={form} />
      </Form>
    </AuthFormWrapper>
  )
}

export default SignInForm;