import React from 'react';
import ProductType from 'types/product';
import { useCurrentProfile } from 'lib/apollo/currentProfile';

import MenuItem from '../MenuItem';
import { Wrapper, Balance } from './styled';

type MenuListProps = {
  items: ProductType[],
};

const MenuList = ({ items }: MenuListProps) => {
  const { me } = useCurrentProfile();

  return(
    <>
      {/* @ts-ignore*/}
      <Balance>
        У вас есть  {me?.bonusBalance} бонусов
      </Balance>
      <Wrapper>
        {items.map((item, i) => <MenuItem key={i} item={item} />)}
      </Wrapper>
    </>
  )
}

export default MenuList;