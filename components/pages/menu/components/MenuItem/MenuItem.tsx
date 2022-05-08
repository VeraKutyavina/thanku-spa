import React from 'react';
import { ItemWrapper, Photo, Title, BonusWrapper, LeftMessage } from './styled';

type ItemType = {
  name: string,
  photo: string,
  count: number,
}

type MenuItemProps = {
  item: ItemType,
};

const MenuItem = ({ item }: MenuItemProps) => {
  const { name, photo, count } = item;

  return(
    <ItemWrapper>
      <Photo />
      <Title> {name} </Title>
      <BonusWrapper> 700 points </BonusWrapper>
      <LeftMessage> Доступно к покупке: {count} </LeftMessage>
    </ItemWrapper>
  )
}

export default MenuItem;