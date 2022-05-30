import { MutationResult } from '@apollo/client';

export type SendBonusVariables = {
  amount: Number;
  comment: string;
  receiverId: Number;
};

export type SendBonusMutationVariables = { input: SendBonusVariables };

export type SendBonusMutationResult = MutationResult<SendBonusMutationData>;

export type SendBonusMutationData = {
  bonusTransfer: { amount: Number };
};
