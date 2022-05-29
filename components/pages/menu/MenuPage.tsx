import React from 'react';
import { useProduct } from 'lib/apollo/products';
import withApolloClient from 'lib/withApolloClient';

import Loader from 'components/shared/atoms/Loader';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import MenuList from './components/MenuList';

const MenuPage = () => {
  const { products, loading } = useProduct();

  return(
    <DefaultTemplate>
      {loading && <Loader />}

      {!loading &&  <MenuList items={products} />}
    </DefaultTemplate>
  )
}

export default withApolloClient(MenuPage);