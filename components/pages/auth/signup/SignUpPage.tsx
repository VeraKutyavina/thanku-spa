import React from 'react';

import withApolloClient from 'lib/withApolloClient';
import AuthTemplate from 'components/shared/templates/AuthTemplate';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
};

export default withApolloClient(SignUpPage);