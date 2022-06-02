import React from 'react';
import Loader from 'components/shared/atoms/Loader';
import PointsTextarea from '../PointsTextarea';
import Transaction from '../Transaction';

import { useCurrentProfile } from 'lib/apollo/currentProfile';
import { useBonusTransfers } from 'lib/apollo/bonusTransfer';

import { Wrapper, Balance } from './styled';

const PointsFeed = () => {
  const { me } = useCurrentProfile();
  const { bonusTransfers, loading } = useBonusTransfers({});

  return(
    <Wrapper>
      {/*// @ts-ignore*/}
      <Balance>
        У вас есть  {me?.bonusAllowance} бонусов
      </Balance>
      <PointsTextarea />
      {loading && <Loader />}

      {!loading && (
        <>
          {bonusTransfers.reverse().map((transfer, i) =>  <Transaction transfer={transfer} key={i} />)}
        </>
      )}
    </Wrapper>
  )
}

export default PointsFeed;