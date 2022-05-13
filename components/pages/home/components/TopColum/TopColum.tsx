import React from 'react';
import { Wrapper, ItemWrapper, Title, UserWrapper, UserName, UserInfoWrapper } from './styled';
import ProfileImage from 'components/shared/atoms/ProfileImage';

const TopColum = () => {
  return(
    <Wrapper>
      <ItemWrapper>
        <Title> Топ получателей </Title>
        <UserWrapper>
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <UserName> Test Testovich </UserName>
          </UserInfoWrapper>
          40
        </UserWrapper>

        <UserWrapper>
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <UserName> Test Testovich </UserName>
          </UserInfoWrapper>
          23
        </UserWrapper>

        <UserWrapper>
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <UserName> Test Testovich </UserName>
          </UserInfoWrapper>
          66
        </UserWrapper>

      </ItemWrapper>
    </Wrapper>
  )
}

export default TopColum;