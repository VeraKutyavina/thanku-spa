import styled, { css } from 'styled-components';

export const StyledButton = styled.button(
  ({ theme, theme: { colors }, ...rest }) =>
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      border: none;
      padding: 0.76rem 1rem;
      border-radius: 3px;
      background-color: ${colors.green};
      font-size: 0.875rem;
      font-weight: 600;
      color: ${colors.white};
      cursor: pointer;

      &:disabled {
        cursor: default;
        opacity: 0.5;
      }
    `,
);
