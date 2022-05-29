import React from 'react';
import type { PropsWithChildren } from 'react';

import EmptyType from 'types/emptyType';
import { Wrapper, Title } from './styled';

const Loader = ({ children }: PropsWithChildren<EmptyType>): JSX.Element => (
  <Wrapper>
    <Title>{children}</Title>
  </Wrapper>
);

export default Loader;
