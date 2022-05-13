import styled, {css} from 'styled-components';

export const ItemWrapper = styled.div(
  ({ theme: { colors }  }) => css`
    width: 25rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    background: ${colors.white};
    padding: 1rem;
    color: ${colors.grey};
  `,
);

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0;
`


export const Wrapper = styled.div`
  width: 35%;
`

export const UserWrapper = styled.div(
  ({ theme: { colors }  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 0;
    border-bottom: 1px solid ${colors.lightGray};
`)

export const UserName = styled.div`
  margin-left: 0.5rem;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`
