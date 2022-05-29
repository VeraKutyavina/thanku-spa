import { MutationResult } from '@apollo/client';

export type SignOutVariables = {
  everywhere?: boolean;
};

export type SignOutMutationVariables = { input: SignOutVariables; };

export type SignOutMutationResult = MutationResult<SignOutMutationData>;

export type SignOutMutationData = {
  signout: { message: string };
};
