import React, { useState, useRef, useEffect, useCallback, PropsWithChildren, ReactComponentElement } from 'react';

import { DropdownWrapper, DropdownToggler, DropdownList } from './styled';


type DropdownProps = {
  dropdown: ReactComponentElement<any>;
  customStyles?: Function;
};

const Dropdown = ({ children, dropdown, customStyles }: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
        return;
      }
      toggleDropdown();
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <>
        <DropdownToggler
          data-testid="dropdown"
          data-cy="dropdown-toggler"
          onClick={toggleDropdown}
          className={isOpen && 'open'}
        >
          {dropdown}
        </DropdownToggler>

        {isOpen && (
          <DropdownList customStyles={customStyles} data-testid="dropdown-list" data-cy="dropdown-list">
            {children}
          </DropdownList>
        )}
      </>
    </DropdownWrapper>
  );
};

export default Dropdown;
