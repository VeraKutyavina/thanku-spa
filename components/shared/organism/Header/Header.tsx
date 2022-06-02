import React from 'react';
import Link from 'next/link';
import Dropdown from 'components/shared/atoms/Dropdown';
import NavigationList from 'components/shared/atoms/NavigationList';
import ProfileImage from 'components/shared/atoms/ProfileImage';
import routes from 'config/routes';

import { useSignOut } from 'lib/apollo/auth';
import { useCurrentProfile } from 'lib/apollo/currentProfile';
import { Wrapper, Title, UserInfoWrapper, Name, customMenuStyles } from './styled'

const Header = () => {
  const { me } = useCurrentProfile();
  const [signOut] = useSignOut();

  const menuItems = [
    { text: 'Профиль', url: routes.PROFILE.name },
    { text: 'Каталог', url: routes.MENU.name },
    me?.role === 'manager' && { text: 'Управление', url: routes.MANAGE.name },
    { text: 'Выйти из профиля', onClick: () => signOut({}), type: 'action' },
  ].filter(Boolean);

  console.log(me)
  
  return(
    <Wrapper>
      <Link passHref href={routes.HOME.name}>
        <Title> ThankU </Title>
      </Link>

      <Dropdown
        customStyles={customMenuStyles}
        dropdown={
          <UserInfoWrapper>
            <ProfileImage avatar={null} />
            <Name> {me?.firstName} {me?.lastName} </Name>
          </UserInfoWrapper>
        }
      >
        <NavigationList items={menuItems} />
      </Dropdown>
      
    </Wrapper>
  )
};

export default Header;
