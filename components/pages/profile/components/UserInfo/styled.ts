import styled, {css} from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors }  }) => css`
    display: flex;
    align-items: center;
    background: ${colors.white};
    padding: 1rem;
    box-shadow: 0 0 2px 0 ${colors.green};
    border: 1px solid ${colors.brColor};
    color: ${colors.grey};
    margin-top: 1rem;
  `,
);

export const UserName = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  margin-left: 0.5rem;
`
