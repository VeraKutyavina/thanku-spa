import React from 'react';
import * as Yup from 'yup';
import AuthForm from '../AuthForm';
import { Form, AuthFormWrapper } from './styled'
import theme from 'public/theme';

const SignUpForm = () => {
  const fields = [
    {
      type: 'email',
      name: 'email',
      title: 'Email',
      initialValue: '',
      validationSchema: Yup.string()
        .trim()
        .email('Email должен быть валидный')
        .required('Это поле необходимо для входа в систему'),
    },
    {
      type: 'password',
      name: 'password',
      title: 'Пароль',
      initialValue: '',
      validationSchema: Yup.string().required('Используйте цифры и символы - это будет безопаснее'),
    },
  ].filter(Boolean);

  const form = {
    fields,
    submit: () => {},
  };
  
  return(
    <AuthFormWrapper>
      <Form>
        <AuthForm form={form} theme={theme} />
      </Form>
    </AuthFormWrapper>
  )
}

export default SignUpForm;