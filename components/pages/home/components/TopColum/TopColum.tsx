import React from 'react';
import ProfileImage from 'components/shared/atoms/ProfileImage';

import { Wrapper, ItemWrapper, Title, UserWrapper, UserName, UserInfoWrapper } from './styled';

const TopColum = () => {
  return(
    <Wrapper>
      <ItemWrapper>
        <Title> Топ получателей </Title>
        <UserWrapper>
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <UserName> Anna Aleynik </UserName>
          </UserInfoWrapper>
        </UserWrapper>

        <UserWrapper>
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <UserName> Vera Kutyavina </UserName>
          </UserInfoWrapper>
        </UserWrapper>

        <UserWrapper>
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <UserName> Test Test </UserName>
          </UserInfoWrapper>
        </UserWrapper>

      </ItemWrapper>
    </Wrapper>
  )
}

export default TopColum;