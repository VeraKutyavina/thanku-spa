import styled, { css } from 'styled-components';

export const FormContentWrapper = styled.div(
  ({ theme: { colors } }) =>
    css`
      max-width: 40rem;

      input,
      textarea,
      select {
        width: 100%;
        padding: 0.62rem;
        font-size: 1rem;
        border-radius: 2px;
        border: 1px solid ${colors.greyD6};
        box-sizing: border-box;
      }

      [type='file'] {
        border: none;
        padding: 0;
      }

      input[type='checkbox'],
      input[type='radio'] {
        width: auto;
      }

      textarea {
        resize: vertical;
      }
    `,
);

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldWrapper = styled.div`
  position: relative;
  padding-top: 1.5rem;
  margin-bottom: 1.25rem;
`;

export const FieldLabel = styled.label(
  ({ theme: { colors } }) =>
    css`
      position: absolute;
      top: 0;
      left: 0;
      color: ${colors.greyText};
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0;
    `,
);

export const ErrorWrapper = styled.div(
  ({ theme: { colors } }) => css`
    font-size: 0.875rem;
    color: ${colors.red};
    padding-top: 0.5rem;
    font-weight: normal;
  `,
);

export const InputField = styled.div`
  position: relative;
`;

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  button {
    margin-right: 1.5rem;
  }
`;

export const InputIcon = styled.a`
  position: absolute;
  top: 0;
  right: 0.62rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 100%;

  svg {
    width: 22px;
  }
`;