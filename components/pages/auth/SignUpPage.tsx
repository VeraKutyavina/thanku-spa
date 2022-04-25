import React from 'react';
import Router from 'next/router';

import withApolloClient from 'lib/withApolloClient';
import AuthTemplate from 'components/shared/templates/AuthTemplate';

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <div>xjs n</div>
    </AuthTemplate>
  );
};

export default withApolloClient(SignUpPage);