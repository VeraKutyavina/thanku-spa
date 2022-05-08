import styled, { css } from 'styled-components';
import StylesType from 'types/stylesType';

export const DropdownWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
`;

export const DropdownToggler = styled.div`
  position: relative;
`;

export const DropdownList = styled.div<StylesType>(
  ({ customStyles }) => css`
    position: absolute;
    z-index: 1;
    ${customStyles && customStyles()}
  `,
);
