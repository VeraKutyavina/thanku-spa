import { useMutation } from '@apollo/client';
import SendBonus from 'graphql/mutation/sendBonus';
import { SendBonusMutationData, SendBonusMutationResult, SendBonusMutationVariables, SendBonusVariables } from 'types/api/sendBonusApiType';

export const useSendBonus = (): [((variables: SendBonusVariables) => Promise<void>), SendBonusMutationResult] => {

  const [mutation, mutationState] = useMutation<SendBonusMutationData, SendBonusMutationVariables>(SendBonus);

  const mutate = async ({ amount, receiverId, comment }: SendBonusVariables) => {
    const sendBonusInput = { amount, receiverId, comment };

    try {
      await mutation({ variables: { input: sendBonusInput} });

    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};
