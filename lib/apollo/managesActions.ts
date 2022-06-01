import { useMutation } from '@apollo/client';

import AcceptInvitation from 'graphql/mutation/acceptInvitation';
import CreateProduct from 'graphql/mutation/createProduct';
import InviteUser from 'graphql/mutation/inviteUser';

import { CreateProductMutationData, CreateProductVariables, CreateProductMutationResult, CreateProductMutationVariables } from 'types/api/createProductApiType';
import { AcceptInvitationMutationData, AcceptInvitationMutationResult, AcceptInvitationMutationVariables, AcceptInvitationVariables } from 'types/api/acceptInvitationApiType';
import { InviteUserMutationData, InviteUserMutationResult, InviteUserMutationVariables, InviteUserVariables } from 'types/api/inviteUserApiType';

export const useCreateProduct = (): [((variables: CreateProductVariables) => Promise<void>), CreateProductMutationResult] => {

  const [mutation, mutationState] = useMutation<CreateProductMutationData, CreateProductMutationVariables>(CreateProduct);

  const mutate = async ({ count, price, name }: CreateProductVariables) => {
    const createProductInput = {
      count: +count,
      price: +price,
      name
    };

    try {
      await mutation({ variables: createProductInput });

    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};

export const useInviteUser = (): [((variables: InviteUserVariables) => Promise<void>), InviteUserMutationResult] => {

  const [mutation, mutationState] = useMutation<InviteUserMutationData, InviteUserMutationVariables>(InviteUser);

  const mutate = async ({ lastName, firstName, role = 'MANAGER', email }: InviteUserVariables) => {
    const createBonusInput = { lastName, firstName, email, role};

    try {
      await mutation({ variables: { userParams: createBonusInput } });

    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};

export const useAcceptInvitation= (): [((variables: AcceptInvitationVariables) => Promise<void>), AcceptInvitationMutationResult] => {

  const [mutation, mutationState] = useMutation<AcceptInvitationMutationData, AcceptInvitationMutationVariables>(AcceptInvitation);

  const mutate = async ({ lastName, firstName, invitationToken, password, login, birthdate}: AcceptInvitationVariables) => {
    const acceptInvitationInput = { lastName, firstName, invitationToken, confirmPassword: password, password, login, birthdate };

    try {
      await mutation({ variables: { input: acceptInvitationInput } });

    } catch (error) {
      console.log(error);
    }
  };

  return [mutate, mutationState];
};
