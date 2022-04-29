import React from 'react';
import type { PropsWithChildren } from 'react';
import EmptyProps from 'types/emptyType';

import { Wrapper, PageContent, TopLine } from './styled';

const AuthTemplate = ({ children }: PropsWithChildren<EmptyProps>): JSX.Element => {
  return (
    <Wrapper>
      <TopLine />
      <PageContent>{children}</PageContent>
    </Wrapper>
  );
};

export default AuthTemplate;