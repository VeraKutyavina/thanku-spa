import {ApolloLink} from '@apollo/client';

export const createAuthHeaderLink = ({ cookie }) =>
  new ApolloLink((operation, forward) => {
    const accessToken = window.localStorage.getItem('accessToken');
    const authHeader = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
    const cookieHeader = cookie ? { Cookie: cookie } : {};

    operation.setContext(({ headers }) => {
      return {
        headers: {
          ...authHeader,
          ...cookieHeader,
          ...headers,
        },
      };
    });

    return forward(operation);
  });