import { MutationResult } from '@apollo/client';

export type CreateBonusVariables = {
  productId: Number;
  quantity: Number;
  price: Number;
};

export type CreateBonusMutationVariables = CreateBonusVariables;

export type CreateBonusMutationResult = MutationResult<CreateBonusMutationData>;

export type CreateBonusMutationData = {
  order: { comment: string };
};
