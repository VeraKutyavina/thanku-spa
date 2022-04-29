import React from 'react';
import * as Yup from 'yup';
import theme from 'public/theme';
import AuthForm from '../AuthForm';
import { REQUIRED_FIELD } from 'config/form';
import { Form, AuthFormWrapper } from './styled'

const SignUpForm = () => {
  const fields = [
    {
      type: 'text',
      name: 'lastName',
      title: 'Фамилия',
      initialValue: '',
      validationSchema: Yup.string()
        .trim()
        .required(REQUIRED_FIELD),
    },
    {
      type: 'email',
      name: 'email',
      title: 'Email',
      initialValue: '',
      validationSchema: Yup.string()
        .trim()
        .email('Email должен быть валидный')
        .required(REQUIRED_FIELD),
    },
    {
      type: 'password',
      name: 'password',
      title: 'Пароль',
      initialValue: '',
      validationSchema: Yup.string().required(REQUIRED_FIELD),
    },
  ].filter(Boolean);

  const form = {
    fields,
    submit: () => {},
  };
  
  return(
    <AuthFormWrapper>
      <Form>
        <h2>Регистрация</h2>
        <AuthForm form={form} />
      </Form>
    </AuthFormWrapper>
  )
}

export default SignUpForm;