import React from 'react';
import ProfileImage from 'components/shared/atoms/ProfileImage';

import { ItemWrapper, UserWrapper, UserName, Text } from './styled';

const Transaction = ({ transfer }) => {
  const { sender, comment } = transfer;
  return(
    <ItemWrapper>
      <UserWrapper>
        <ProfileImage avatar={null} />
        <UserName> {sender.firstName} {sender.lastName} </UserName>
      </UserWrapper>
      <Text>
        {comment}
      </Text>
    </ItemWrapper>
  )
}

export default Transaction;