import { useQuery } from '@apollo/client';
import Users from 'graphql/queries/users';
import { UsersData } from 'types/api/usersApiType';

export const useUsers = () => {

  const { data, loading, error } = useQuery<UsersData>(Users, {
    variables: {},
    fetchPolicy: 'cache-and-network',
  });

  return {
    users: data?.users?.edges?.map(({ node }) => node),
    loading,
    error,
  };
};
