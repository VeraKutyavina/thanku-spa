import React, {MouseEventHandler, PropsWithChildren} from 'react';

import { StyledButton } from './styled';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | unknown;
  customStyles: Function | undefined;
  onClick: MouseEventHandler | undefined;
};

const Button = ({ children, customStyles, type = 'button', onClick, ...rest }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton onClick={onClick} customStyles={customStyles} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
