import { MutationResult } from '@apollo/client';
import User from '../user';

export type InviteUserVariables = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type  InviteUserMutationVariables = { userParams: InviteUserVariables };

export type  InviteUserMutationResult = MutationResult<InviteUserMutationData>;

export type  InviteUserMutationData = {
  invitedUser: User;
};
