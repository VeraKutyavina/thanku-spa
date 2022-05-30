import styled, {css} from 'styled-components';

export const Balance = styled.div(
  ({ theme: { colors }  }) => css`
    color: ${colors.grey};
    margin-bottom: 1rem;
  `,
);

export const Wrapper = styled.div`
  width: 65%;
`


