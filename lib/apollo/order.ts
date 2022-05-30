import { useMutation } from '@apollo/client';
import CreateOrder from 'graphql/mutation/createOrder';
import CurrentUser from 'graphql/queries/me';
import { CreateBonusMutationData, CreateBonusMutationResult, CreateBonusMutationVariables, CreateBonusVariables } from 'types/api/createOrderApiType';

export const useCreateOrder = (): [((variables: CreateBonusVariables) => Promise<void>), CreateBonusMutationResult] => {

  const [mutation, mutationState] = useMutation<CreateBonusMutationData, CreateBonusMutationVariables>(CreateOrder, {
    refetchQueries: [{ query: CurrentUser }]
  });

  const mutate = async ({ productId, quantity, price }: CreateBonusVariables) => {
    const createBonusInput = { productId, quantity, price };

    try {
      await mutation({ variables: createBonusInput });

    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};
