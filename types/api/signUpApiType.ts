import { MutationResult } from '@apollo/client';
import User from '../user';
import Token from './token';

export type SignUpVariables = {
  user: {
    email: string;
    password: string;
    login: string;
    firstName?: string;
    lastName?: string;
  },
  company: {
    name: string,
    bonusAmount: Number,
  }
};

export type SignUpMutationVariables = SignUpVariables;

export type SignUpMutationResult = MutationResult<SignUpMutationData>;

export type SignUpMutationData = {
  signup: { me: User & Token };
};
