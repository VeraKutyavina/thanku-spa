import styled, { css } from 'styled-components';
import StylesType from 'types/stylesType';

export const StyledButton = styled.button<StylesType>(
  ({ customStyles, theme, theme: { colors }, ...rest }) =>
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 1rem 1rem;
      border-radius: 10px;
      background-color: ${colors.green};
      font-size: 0.875rem;
      font-weight: 600;
      color: ${colors.white};
      cursor: pointer;
      
      
      &:disabled {
        cursor: default;
        opacity: 0.5;
      }
      ${customStyles && customStyles(theme, rest)}
    `,
);
