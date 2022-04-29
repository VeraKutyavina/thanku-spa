import React from 'react';
import Router from 'next/router';

import withApolloClient from 'lib/withApolloClient';
import AuthTemplate from 'components/shared/templates/AuthTemplate';
import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
};

export default withApolloClient(SignUpPage);