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

export const Wrapper = styled.div`
  width: 65%;
`
