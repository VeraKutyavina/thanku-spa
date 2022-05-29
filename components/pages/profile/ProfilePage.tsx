import React from 'react';
import withApolloClient from 'lib/withApolloClient';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import Transaction from '../home/components/Transaction';
import UserInfo from './components/UserInfo';

import { Wrapper, BonusButton, ButtonsWrapper  } from './styled';

const ProfilePage = () => {
  return(
    <DefaultTemplate>
      <Wrapper>
        <UserInfo />
        <ButtonsWrapper>
          <BonusButton> Подаренные бонусы (50) </BonusButton>
          <BonusButton> Полученные бонусы (78) </BonusButton>
        </ButtonsWrapper>
        <Transaction />
        <Transaction />
        <Transaction />
      </Wrapper>
    </DefaultTemplate>
  )
}

export default withApolloClient(ProfilePage);