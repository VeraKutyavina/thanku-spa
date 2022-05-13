import React from 'react';
import { Wrapper } from './styled';
import PointsTextarea from '../PointsTextarea';
import Transaction from '../Transaction';

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