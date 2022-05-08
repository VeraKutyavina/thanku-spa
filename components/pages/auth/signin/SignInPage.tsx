import React from 'react';

import withApolloClient from 'lib/withApolloClient';
import AuthTemplate from 'components/shared/templates/AuthTemplate';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  return (
    <AuthTemplate>
      <SignInForm />
    </AuthTemplate>
  );
};

export default withApolloClient(SignInPage);