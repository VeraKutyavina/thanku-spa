import React, {PropsWithChildren} from 'react';

import { StyledButton } from './styled';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | unknown;
  customStyles: Function | undefined;
};

const Button = ({ children, customStyles, type = 'button',  ...rest }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton customStyles={customStyles} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
