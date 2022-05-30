import { useMutation } from '@apollo/client';
import SendBonus from 'graphql/mutation/sendBonus';
import CurrentUser from 'graphql/queries/me';
import { SendBonusMutationData, SendBonusMutationResult, SendBonusMutationVariables, SendBonusVariables } from 'types/api/sendBonusApiType';

export const useSendBonus = (): [((variables: SendBonusVariables) => Promise<void>), SendBonusMutationResult] => {

  const [mutation, mutationState] = useMutation<SendBonusMutationData, SendBonusMutationVariables>(SendBonus, {
    refetchQueries: [{ query: CurrentUser }]
  });

  const mutate = async ({ amount, receiverId, comment }: SendBonusVariables) => {
    const sendBonusInput = { amount, receiverId, comment };

    try {
      await mutation({ variables: sendBonusInput });

    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};
