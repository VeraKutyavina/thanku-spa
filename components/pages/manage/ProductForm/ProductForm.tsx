import React from 'react';
import * as Yup from 'yup';

import { REQUIRED_FIELD_VALIDATION, VALID_EMAIL_VALIDATION } from 'config/form';
import { useInviteUser } from 'lib/apollo/managesActions';

import AuthForm from 'components/pages/auth/components/AuthForm/AuthForm';

const ProductForm = ({ closeModal }) => {
  const [inviteUser] = useInviteUser();

  const fields = [
    {
      type: 'email',
      name: 'email',
      title: 'Email',
      initialValue: '',
      validationSchema: Yup
        .string().email(VALID_EMAIL_VALIDATION).required(REQUIRED_FIELD_VALIDATION),
    },
    {
      type: 'text',
      name: 'firstName',
      title: 'Имя',
      initialValue: '',
      validationSchema: Yup.string()
        .trim()
        .required(REQUIRED_FIELD_VALIDATION),
    },
    {
      type: 'text',
      name: 'lastName',
      title: 'Фамилия',
      initialValue: '',
      validationSchema: Yup.string()
        .trim()
        .required(REQUIRED_FIELD_VALIDATION),
    },
  ].filter(Boolean);

  const form = {
    fields,
    submit: async (val) => {
      await inviteUser(val);
      closeModal(false)
    },
  };
  
  return(
    <AuthForm form={form} />
  )
}

export default ProductForm;