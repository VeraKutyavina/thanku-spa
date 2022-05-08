import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) =>
    css`
      height: 100vh;
      background-color: ${colors.lightGrey};
      z-index: 1;
    `,
);

export const TopLine = styled.div(
  ({ theme: { colors } }) =>
    css`
      position: absolute;
      width: 100%;
      height: 37vh;
      background-color: ${colors.green};
    `,
);

export const PageContent = styled.section`
  width: 100%;
  position: relative;
`;
