import React from 'react';
import Modal from 'react-modal';
import { withTheme } from 'styled-components';

import { Title, CloseButton, modalStyles } from './styled';

const ModalWindow = ({
  isOpen,
  setIsOpen = (b: boolean) => {},
  isClosable = true,
  title,
  children,
}) => {

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsOpen(false)}
      closeTimeoutMS={200}
      style={{
        content: modalStyles.content,
        overlay: modalStyles.overlay,
      }}
    >
      {isClosable && <CloseButton data-cy="close-modal-button" onClick={() => setIsOpen(false)} />}
      {title && (
        <Title data-testid="modal-title" data-cy="modal-title">
          {title}
        </Title>
      )}
      {children}
    </Modal>
  );
};

Modal.setAppElement('body');

// @ts-ignore
export default withTheme(ModalWindow);
