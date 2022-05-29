import { useQuery } from '@apollo/client';
import CurrentUser from 'graphql/queries/me';
import User from 'types/user';

type UserData = {
  me: User;
};

export const useCurrentProfile = (prefetch = true) => {
  const { data, loading, error } = useQuery<UserData>(CurrentUser, {
    fetchPolicy: prefetch ? 'cache-first' : 'cache-only',
  });

  return {
    me: data?.me,
    loading,
    error,
  };
};
