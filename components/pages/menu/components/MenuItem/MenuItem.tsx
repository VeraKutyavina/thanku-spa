import React, { useState } from 'react';
import ProductType from 'types/product';
import { useCreateOrder } from 'lib/apollo/order';
import { useCurrentProfile } from 'lib/apollo/currentProfile';

import Button from 'components/shared/atoms/Button';
import ModalWindow from 'components/shared/atoms/ModalWindow/ModalWindow';

import { ItemWrapper, Photo, Title, BonusWrapper, LeftMessage } from './styled';

type MenuItemProps = {
  item: ProductType,
};

const MenuItem = ({ item }: MenuItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { me } = useCurrentProfile();

  const { name, count, price, id } = item;

  const [createOrder] = useCreateOrder();
  
  const onSubmit = () => {
    createOrder({ price: price, productId: id, quantity: 1 })
  }

  return(
    <ItemWrapper>
      <Photo>
        Нет изображения
      </Photo>
      <Title> {name} </Title>
      <BonusWrapper onClick={() => setIsModalOpen(true)}> {price} points </BonusWrapper>
      <LeftMessage> Доступно к покупке: {count} </LeftMessage>

      <ModalWindow isOpen={isModalOpen} setIsOpen={setIsModalOpen} title="Подтверждение заказа">
        <div>Вы уверены что хотите приобрести товар <strong> {name} </strong>?</div>
        <br />
        {me.bonusBalance < price &&
          <>
            <div className="error"> У вас недостаточно бонусов</div>
            <br />
          </>
        }
        <Button type="submit" customStyles={() => {}} onClick={onSubmit}> Купить </Button>
      </ModalWindow>

    </ItemWrapper>
  )
}

export default MenuItem;