import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  margin: 6rem 10rem;
`

export const BonusButton = styled.button(
  ({ theme: { colors }  }) => css`
    text-align: center;
    width: 50%;
    height: 2rem;
    background: ${colors.white};
    box-shadow: 0 0 2px 0 ${colors.green};
    border: 1px solid ${colors.brColor};
  `,
);

export const ButtonsWrapper = styled.div`
  display: flex;
`