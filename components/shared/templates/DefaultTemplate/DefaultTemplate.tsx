import React from 'react';
import type { PropsWithChildren } from 'react';
import EmptyProps from 'types/emptyType';

import { Wrapper, PageContent, TopLine } from './styled';
import Header from 'components/shared/organism/Header';

const DefaultTemplate = ({ children }: PropsWithChildren<EmptyProps>): JSX.Element => {
  return (
    <Wrapper>
      <TopLine />
      <Header />
      <PageContent>{children}</PageContent>
    </Wrapper>
  );
};

export default DefaultTemplate;
