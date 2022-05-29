import React from 'react';
import withApolloClient from 'lib/withApolloClient';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import { Wrapper } from './styled'
import PointsFeed from './components/PointsFeed';
import TopColum from './components/TopColum';

const HomePage = () => {
  return(
    <DefaultTemplate>
      <Wrapper>
        <PointsFeed />
        <TopColum />
      </Wrapper>
    </DefaultTemplate>
  )
}

export default withApolloClient(HomePage);