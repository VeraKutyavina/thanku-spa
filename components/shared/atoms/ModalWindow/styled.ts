import styled, { css } from 'styled-components';

export const Title = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
`;

export const modalStyles = {
  content: {
    maxWidth: '520px',
    minWidth: '500px',
    maxHeight: '80%',
    borderRadius: '5px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #E2EAF1',
    backgroundColor: '#FFFFFF',
    boxShadow: '1px 2px 6px 0 rgba(25, 25, 27, 0.15)',
    padding: '25px 45px 25px 35px',
  },
  overlay: {
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
};

export const CloseButton = styled.span(
  ({ theme: { colors } }) => css`
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    color: ${colors.greyD6};
    font-size: 0.8rem;
    cursor: pointer;

    &::before {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      content: '✕';
    }
  `,
);
