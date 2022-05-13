import React from 'react';
import ProfileImage from 'components/shared/atoms/ProfileImage';

import { Wrapper, UserName } from './styled';

const UserInfo = () => {
  return(
    <Wrapper>
      <ProfileImage avatar={null} />
      <UserName> Vera Kutyavina </UserName>
    </Wrapper>
  )
}

export default UserInfo;