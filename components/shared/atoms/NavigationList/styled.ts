import styled, { css } from 'styled-components';
import StylesType from 'types/stylesType';

export const StyledMenu = styled.ul<StylesType>(
  ({ theme: { colors }, customStyles, theme }) => css`
    padding: 0.25rem 0.375rem 0 0;
    margin-right: -0.4rem;
    display: block;
    min-width: 9.375rem;
    width: 13rem;
    background-color: ${colors.white};
    border: 0.07rem solid ${colors.brColor};
    border-radius: 0.26rem;
    text-align: left;
    z-index: 100;
    list-style-type: none;
    filter: drop-shadow(1px 2px 6px rgba(25, 25, 27, 0.07));

    ${customStyles && customStyles(theme)}
  `,
);

export const MenuItem = styled.li(
  ({ theme: { colors } }) => css`
    a,
    button {
      font: inherit;
      display: block;
      padding: 0.9rem 1.1rem;
      line-height: 1rem;
      color: ${colors.grey};
      cursor: pointer;
      background: none;
      border: none;
      font-size: 0.875rem;
      text-align: left;
      height: 2.5rem;

      &:hover,
      &:active,
      &:focus {
        color: ${colors.green};
      }

      &:disabled {
        color: ${colors.greyA3};
      }
    }

    &:last-child {
      &:after {
        display: none;
      }

      padding-bottom: 0.3rem;
    }
  `,
);
