import styled, {css} from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) =>
    css`
      z-index: 10;
      position: relative;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      background-color: ${colors.white};
    `,
);

export const Title = styled.div(
  ({ theme: { colors } }) =>
    css`
      color: ${colors.grey};
      font-weight: bold;
      font-size: 1.5rem;
    `,
);

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 3rem;
`

export const Name = styled.div(
  ({ theme: { colors } }) =>
    css`
      color: ${colors.grey};
      margin: 0 1rem;
      font-size: 0.875rem;
`);

export const customMenuStyles = () => css`
  top: 3rem;
  right: 0.1rem;
  left: auto;
`;