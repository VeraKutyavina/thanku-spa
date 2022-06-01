import { MutationResult } from '@apollo/client';
import Product from '../product';

export type CreateProductVariables = {
  count: number;
  price: number;
  name: string;
};

export type  CreateProductMutationVariables = CreateProductVariables;

export type  CreateProductMutationResult = MutationResult<CreateProductMutationData>;

export type  CreateProductMutationData = {
  product: Product;
};
