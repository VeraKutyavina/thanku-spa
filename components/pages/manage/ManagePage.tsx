import React, {useState} from 'react';
import withApolloClient from 'lib/withApolloClient';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import Button from 'components/shared/atoms/Button';

import { Wrapper} from '../home/styled';
import ModalWindow from 'components/shared/atoms/ModalWindow';
import ProductForm from './ProductForm';

const ManagePage = () => {
  const [isShowProductForm, setIsShowProductForm] = useState(false);
  const [isShowUserForm, setIsShowUserForm] = useState(false);

  return(
    <DefaultTemplate>
      <Wrapper>
        <Button type="submit" customStyles={() => ({ 'margin-top': '8rem' })} onClick={() => {setIsShowUserForm(true)}}> Пригласить пользователя </Button>
        <Button type="submit" customStyles={() => ({ 'margin-top': '8rem' })} onClick={() => {setIsShowProductForm(true)}}> Создать новый продукт </Button>

        <ModalWindow isOpen={isShowProductForm} setIsOpen={setIsShowProductForm} title="Создание продукта">
          <ProductForm closeModal={setIsShowProductForm} />
        </ModalWindow>

        <ModalWindow isOpen={isShowUserForm} setIsOpen={setIsShowUserForm} title="Пригласить пользователя">
          <ProductForm closeModal={setIsShowUserForm} />
        </ModalWindow>

      </Wrapper>
    </DefaultTemplate>
  )
}

export default withApolloClient(ManagePage);