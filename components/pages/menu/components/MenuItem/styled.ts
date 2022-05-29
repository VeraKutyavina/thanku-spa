import styled, {css} from 'styled-components';

export const ItemWrapper = styled.div(
  ({ theme: { colors }  }) => css`
    background: ${colors.white};
    border-radius: 3px;
    padding: 2rem;
    box-shadow: 0 0 2px 0 ${colors.green};
    border: 1px solid ${colors.brColor};
    color: ${colors.grey};
    width: 32%;
    display: flex;
    flex-direction: column;
  `,
);

export const Photo = styled.div(
  ({ theme: { colors }  }) => css`
    width: 100%;
    content: "";
    height: 15rem;
    background: ${colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
`)

export const Title = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
`

export const BonusWrapper = styled.button(
  ({ theme: { colors }  }) => css`
    background: ${colors.white};
    border: 1px solid ${colors.green};
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin: 1rem auto;
    font-weight: bold;
    font-size: 1rem;
    color: ${colors.green};
`)


export const LeftMessage = styled.div(
  ({ theme: { colors }  }) => css`
    color: ${colors.grey98};
    font-size: 0.75rem;
    text-align: center;
`)
