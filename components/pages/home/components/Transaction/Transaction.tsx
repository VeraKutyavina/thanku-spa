import React from 'react';
import { ItemWrapper, UserWrapper, UserName, Text } from './styled';
import ProfileImage from 'components/shared/atoms/ProfileImage';

const Transaction = () => {
  return(
    <ItemWrapper>
      <UserWrapper>
        <ProfileImage avatar={null} />
        <UserName> Anastasia Kovalevskaya </UserName>
      </UserWrapper>
      <Text>
        +20 @RushanaKhalimova agreement hero 💪🏽 #work-hard-play-hard
      </Text>
    </ItemWrapper>
  )
}

export default Transaction;