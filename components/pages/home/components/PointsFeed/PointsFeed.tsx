import React from 'react';
import PointsTextarea from '../PointsTextarea';
import Transaction from '../Transaction';

import { Wrapper } from './styled';

const PointsFeed = () => {
  return(
    <Wrapper>
      <PointsTextarea />
      <Transaction />
      <Transaction />
      <Transaction />
    </Wrapper>
  )
}

export default PointsFeed;