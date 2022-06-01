import { MutationResult } from '@apollo/client';
import User from '../user';

export type AcceptInvitationVariables = {
  invitationToken: string;
  login: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  birthdate: string;
};

export type AcceptInvitationMutationVariables = { input: AcceptInvitationVariables };

export type AcceptInvitationMutationResult = MutationResult<AcceptInvitationMutationData>;

export type AcceptInvitationMutationData = {
  me: User;
};
