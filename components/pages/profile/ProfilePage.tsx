import React, {useState} from 'react';
import withApolloClient from 'lib/withApolloClient';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import Transaction from '../home/components/Transaction';
import UserInfo from './components/UserInfo';

import { Wrapper, BonusButton, ButtonsWrapper  } from './styled';
import {useBonusTransfers} from '../../../lib/apollo/bonusTransfer';
import {useCurrentProfile} from '../../../lib/apollo/currentProfile';

const ProfilePage = () => {
  const [type, setType] = useState('SENDED');
  const { me } = useCurrentProfile();
  const { bonusTransfers } = useBonusTransfers({ id: me?.id, kind: type });

  console.log(bonusTransfers)

  console.log(bonusTransfers);

  return(
    <DefaultTemplate>
      <Wrapper>
        <UserInfo />
        <ButtonsWrapper>
          <BonusButton onClick={() => setType('SENDED')}> Подаренные бонусы (50) </BonusButton>
          <BonusButton onClick={() => setType('RECEIVED')}> Полученные бонусы (78) </BonusButton>
        </ButtonsWrapper>
        {bonusTransfers && bonusTransfers.map(t => <Transaction transfer={t} />)}
      </Wrapper>
    </DefaultTemplate>
  )
}

export default withApolloClient(ProfilePage);