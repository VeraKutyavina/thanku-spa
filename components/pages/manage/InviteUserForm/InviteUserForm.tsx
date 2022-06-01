import React from 'react';
import * as Yup from 'yup';

import { REQUIRED_FIELD_VALIDATION } from 'config/form';
import { useCreateProduct } from 'lib/apollo/managesActions';

import AuthForm from 'components/pages/auth/components/AuthForm/AuthForm';

const InviteUserForm = ({ closeModal }) => {
  const [createProduct] = useCreateProduct();

  const fields = [
    {
      type: 'text',
      name: 'name',
      title: 'Название товара',
      initialValue: '',
      validationSchema: Yup.string().required(REQUIRED_FIELD_VALIDATION),
    },
    {
      type: 'number',
      name: 'count',
      title: 'Колличество товара',
      initialValue: '',
      validationSchema: Yup.string()
        .trim()
        .required(REQUIRED_FIELD_VALIDATION),
    },
    {
      type: 'number',
      name: 'price',
      title: 'Цена товара',
      initialValue: '',
      validationSchema: Yup.string().required(REQUIRED_FIELD_VALIDATION),
    },
  ].filter(Boolean);

  const form = {
    fields,
    submit: async (val) => {
      await createProduct(val);
      closeModal(false)
    },
  };
  
  return(
    <AuthForm form={form} />
  )
}

export default InviteUserForm;