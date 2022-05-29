import React from 'react';
import ProductType from 'types/product';

import { ItemWrapper, Photo, Title, BonusWrapper, LeftMessage } from './styled';


type MenuItemProps = {
  item: ProductType,
};

const MenuItem = ({ item }: MenuItemProps) => {
  const { name, count, price } = item;

  return(
    <ItemWrapper>
      <Photo>
        Нет изображения
      </Photo>
      <Title> {name} </Title>
      <BonusWrapper> {price} points </BonusWrapper>
      <LeftMessage> Доступно к покупке: {count} </LeftMessage>
    </ItemWrapper>
  )
}

export default MenuItem;