import { useQuery } from '@apollo/client';
import Product from 'graphql/queries/product';
import { ProductData } from 'types/api/productsApiType';

export const useProduct = () => {

  const { data, loading, error } = useQuery<ProductData>(Product, {
    variables: {},
    fetchPolicy: 'cache-and-network',
  });

  return {
    products: data?.products?.edges?.map(({ node }) => node),
    loading,
    error,
  };
};
