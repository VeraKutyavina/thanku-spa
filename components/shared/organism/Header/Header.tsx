import React from 'react';
import Dropdown from 'components/shared/atoms/Dropdown';
import NavigationList from 'components/shared/atoms/NavigationList';
import ProfileImage from 'components/shared/atoms/ProfileImage';

import { Wrapper, Title, UserInfoWrapper, Name, customMenuStyles } from './styled'

const Header = () => {
  const menuItems = [
    { text: 'Профиль', url: '#' },
    { text: 'Выйти из системы', url: '#' },
  ];
  
  return(
    <Wrapper>
      <Title> ThankU </Title>

      <Dropdown
        customStyles={customMenuStyles}
        dropdown={
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <Name> Test T.T. </Name>
          </UserInfoWrapper>
        }
      >
        <NavigationList items={menuItems} />
      </Dropdown>
      
    </Wrapper>
  )
};

export default Header;
