import React from 'react';
import Link from 'next/link';

import { StyledMenu, MenuItem } from './styled';

type NavigationListProps = {
  items: any[];
  customStyles?: Function;
};

const NavigationList = ({ items = [], customStyles }: NavigationListProps) => (
  <StyledMenu customStyles={customStyles}>
    {items.map(({ text, url, type, testId = '', onClick = () => {}, disabled = false }, i) => {
      return (
        <MenuItem key={i}>
          {type === 'action' ? (
            <button disabled={disabled} data-testid={testId} data-cy={testId} type="button" onClick={onClick}>
              {text}
            </button>
          ) : (
            <Link href={url}>
              <a>{text}</a>
            </Link>
          )}
        </MenuItem>
      );
    })}
  </StyledMenu>
);

export default NavigationList;
