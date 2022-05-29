import { useQuery } from '@apollo/client';
import Product from 'graphql/queries/product';

export const useProduct = () => {

  const { data, loading, error } = useQuery(Product, {
    variables: {},
    fetchPolicy: 'cache-and-network',
  });

  return {
    poll: data,
    loading,
    error,
  };
};
