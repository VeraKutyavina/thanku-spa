import { useQuery } from '@apollo/client';
import BonusTransfers from 'graphql/queries/bonusTransfers';
import { BonusTransfersData } from 'types/api/bonusTransfersApiType';

export const useBonusTransfers = ({ id, kind }) => {

  const { data, loading, error } = useQuery<BonusTransfersData>(BonusTransfers, {
    variables: id && kind && {userId: id, kind} || {},
    fetchPolicy: 'cache-and-network',
  });

  return {
    bonusTransfers: data?.bonusTransfers?.edges?.map(({ node }) => node),
    loading,
    error,
  };
};
