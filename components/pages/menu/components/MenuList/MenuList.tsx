import React from 'react';
import MenuItem from '../MenuItem';
import { Wrapper } from './styled'

type ItemType = {
  name: string,
  photo: string,
  count: number,
}

type MenuListProps = {
  items: ItemType[],
};

const MenuList = ({ items }: MenuListProps) => {
  return(
    <Wrapper>
      {items.map((item, i) => <MenuItem key={i} item={item} />)}
    </Wrapper>
  )
}

export default MenuList;