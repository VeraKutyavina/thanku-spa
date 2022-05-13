import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div(
  ({ theme: { colors }  }) => css`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
    padding: 1rem;
    box-shadow: 0 0 2px 0 ${colors.green};
    border: 1px solid ${colors.brColor};
    color: ${colors.grey};
    margin-top: 1rem;
  `,
);

export const UserWrapper = styled.div(
  ({ theme: { colors }  }) => css`
    display: flex;
    align-items: center;
`)

export const UserName = styled.div`
  font-weight: 500;
  margin-left: 0.5rem;
`

export const Text = styled.div`
  margin: 1rem 0 1rem 1rem;
`