import styled, { css } from 'styled-components';

export const AuthFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Form = styled.div(
  ({ theme: { colors } }) =>
    css`
      background: ${colors.white};
      padding: 2rem;
      width: 25rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`)