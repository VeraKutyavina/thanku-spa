import React from 'react';
import PointsTextarea from '../PointsTextarea';
import Transaction from '../Transaction';

import { useCurrentProfile } from 'lib/apollo/currentProfile';
import { Wrapper, Balance } from './styled';

const PointsFeed = () => {
  const { me } = useCurrentProfile();
  return(
    <Wrapper>
      {/*// @ts-ignore*/}
      <Balance>
        У вас есть  {me?.bonusAllowance} бонусов
      </Balance>
      <PointsTextarea />
      <Transaction />
      <Transaction />
      <Transaction />
    </Wrapper>
  )
}

export default PointsFeed;