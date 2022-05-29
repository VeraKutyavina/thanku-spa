import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import SignUp from 'graphql/mutation/signup';
import SignIn from 'graphql/mutation/signin';
import SignOut from 'graphql/mutation/signout';
import CurrentUser from 'graphql/queries/me';

import routes from 'config/routes';
import { SIGN_IN_EVENT, SIGN_OUT_EVENT } from 'config/globalEvents.json';

import type { SignUpMutationData, SignUpMutationVariables, SignUpVariables, SignUpMutationResult } from 'types/api/signUpApiType';
import type { SignInMutationData, SignInMutationVariables, SignInVariables, SignInMutationResult } from 'types/api/signInApiType';
import type { SignOutMutationData, SignOutMutationVariables, SignOutVariables, SignOutMutationResult } from 'types/api/signOutApiTypes';


export const useSignUp = (): [((variables: SignUpVariables) => Promise<void>), SignUpMutationResult] => {
  const router = useRouter();

  const [mutation, mutationState] = useMutation<SignUpMutationData, SignUpMutationVariables>(SignUp, {
    update: (store, { data }) => {
      if (!data) {
        return;
      }

      store.writeQuery({
        query: CurrentUser,
        data: {
          me: {
            ...data.signup.me,
          },
        },
      });
    },
    onCompleted: ({ signup = {} }) => {
      const token = signup?.accessToken
      // TODO: create another way to store access & refresh token
      window.localStorage.setItem('accessToken', token);
    }
  });

  const mutate = async ({ user, company }: SignUpVariables) => {

    try {
      await mutation({ variables: { user, company } });

      window.localStorage.setItem(SIGN_IN_EVENT, Date.now().toString());

      router.push(routes.HOME.pattern);
    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};

export const useSignIn = (): [((variables: SignInVariables) => Promise<void>), SignInMutationResult]  => {
  const router = useRouter();

  const [mutation, mutationState] = useMutation<SignInMutationData, SignInMutationVariables>(SignIn, {
    update: (store, { data }) => {
      if (!data) {
        return;
      }

      store.writeQuery({
        query: CurrentUser,
        data: {
          me: {
            ...data.signin.me,
          },
        },
      });
    },
    onCompleted: ({ signin = {} }) => {
      const token = signin?.accessToken
      window.localStorage.setItem('accessToken', token);
    }
  });

  const mutate = async ({ email, password }: SignInVariables) => {
    const signInInput = {
      email,
      password,
    };

    try {
      await mutation({ variables: { input: signInInput } });

      window.localStorage.setItem(SIGN_IN_EVENT, Date.now().toString());

      router.push(routes.HOME.pattern);
    } catch (error) {
     console.log(error);
    }
  };

  return [mutate, mutationState];
};

export const useSignOut = (): [((variables: SignOutVariables) => Promise<void>), SignOutMutationResult]  => {
  const router = useRouter();

  const [mutation, mutationState] = useMutation<SignOutMutationData, SignOutMutationVariables>(SignOut, {
    update: (store) => {
      store.writeQuery({
        query: CurrentUser,
        data: {
          me: null,
        },
      });
    },
  });

  const mutate = async ({ everywhere = false }: SignOutVariables = {}) => {
    const signOutInput = { everywhere };

    try {
      await mutation({ variables: { input: signOutInput } });

      window.localStorage.setItem(SIGN_OUT_EVENT, Date.now().toString());
      window.localStorage.setItem('accessToken', undefined)

      router.push(routes.SIGN_IN.pattern);
    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};
