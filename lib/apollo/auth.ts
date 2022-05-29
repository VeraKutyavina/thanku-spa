import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import SignUp from 'graphql/mutation/signup';
import CurrentUser from 'graphql/queries/me';

import routes from 'config/routes';
import { SIGN_IN_EVENT } from 'config/globalEvents.json';

import type { SignUpMutationData, SignUpMutationVariables, SignUpVariables, SignUpMutationResult } from 'types/api/signUpApiType';


const useSignUp = (): [(({user, company}: SignUpVariables) => Promise<void>), SignUpMutationResult] => {
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

export default useSignUp;