import React from 'react';
import withApolloClient from 'lib/withApolloClient';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import Button from 'components/shared/atoms/Button';

import { Wrapper} from '../home/styled';

const ManagePage = () => {
  return(
    <DefaultTemplate>
      <Wrapper>
        <Button type="submit" customStyles={() => ({ 'margin-top': '8rem' })} onClick={() => {}}> Пригласить пользователя </Button>
        <Button type="submit" customStyles={() => ({ 'margin-top': '8rem' })} onClick={() => {}}> Создать новый продукт </Button>
      </Wrapper>
    </DefaultTemplate>
  )
}

export default withApolloClient(ManagePage);