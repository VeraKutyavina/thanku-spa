import React from 'react';
import Dropdown from 'components/shared/atoms/Dropdown';
import NavigationList from 'components/shared/atoms/NavigationList';
import ProfileImage from 'components/shared/atoms/ProfileImage';
import routes from 'config/routes';

import { useSignOut } from 'lib/apollo/auth';
import { Wrapper, Title, UserInfoWrapper, Name, customMenuStyles } from './styled'

const Header = () => {
  const [signOut] = useSignOut()
  const menuItems = [
    { text: 'Профиль', url: '#' },
    { text: 'Каталог', url: routes.MENU.name },
    { text: 'Выйти из профиля', onClick: () => signOut({}), type: 'action' },
  ];
  
  return(
    <Wrapper>
      <Title> ThankU </Title>

      <Dropdown
        customStyles={customMenuStyles}
        dropdown={
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <Name> Test Test </Name>
          </UserInfoWrapper>
        }
      >
        <NavigationList items={menuItems} />
      </Dropdown>
      
    </Wrapper>
  )
};

export default Header;
