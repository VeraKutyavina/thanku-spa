import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div(
  ({ theme: { colors }  }) => css`
    background: ${colors.white};
    border-radius: 5px;
    padding: 2rem;
    box-shadow: 0 0 2px 0 ${colors.green};
    border: 1px solid ${colors.brColor};
    color: ${colors.grey};
    display: flex;
    flex-direction: column;
    
    .error {
      color: ${colors.red};
    }
  `,
);

export const Textarea = styled.textarea(
  ({ theme: { colors }  }) => css`
    background: ${colors.white};
    color: ${colors.grey};
    height: 4rem;
    border: none;
    font-size: 1.3rem;

    &::placeholder {
      color: ${colors.lightGray};
      font-size: 1.3rem;
    }
  `,
);

export const customButtonStyles = () => css`
  width: 8rem;
  padding: 0.7rem;
  margin: 0.5rem 0;
`;