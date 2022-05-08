import React from 'react';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import MenuList from './components/MenuList';

const items = [
  {
    name: 'Куртка',
    photo: 'https',
    count: 1,
  },
  {
    name: 'Шапка',
    photo: 'https',
    count: 1,
  },
  {
    name: 'Кружка',
    photo: 'https',
    count: 1,
  },
  {
    name: 'Зонт',
    photo: 'https',
    count: 1,
  },
]

const MenuPage = () => {
  return(
    <DefaultTemplate>
      <MenuList items={items} />
    </DefaultTemplate>
  )
}

export default MenuPage;