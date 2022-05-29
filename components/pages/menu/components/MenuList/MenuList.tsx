import React from 'react';
import MenuItem from '../MenuItem';
import { Wrapper } from './styled'
import ProductType from 'types/product';

type MenuListProps = {
  items: ProductType[],
};

const MenuList = ({ items }: MenuListProps) => {
  return(
    <Wrapper>
      {items.map((item, i) => <MenuItem key={i} item={item} />)}
    </Wrapper>
  )
}

export default MenuList;