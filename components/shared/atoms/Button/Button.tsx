import React from 'react';

import { StyledButton } from './styled';

const Button = ({ children, type = 'button', testId, ...rest }) => {
  return (
    <StyledButton data-testid={testId} data-cy={testId} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
