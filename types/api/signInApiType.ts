import { MutationResult } from '@apollo/client';
import User from '../user';
import Token from './token';

export type SignInVariables = {
  email: string;
  password: string;
};

export type SignInMutationVariables = { input: SignInVariables };

export type SignInMutationResult = MutationResult<SignInMutationData>;

export type SignInMutationData = {
  signin: { me: User } & Token;
};
