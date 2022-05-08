import React from 'react';

import { StyledImageWrapper, StyledImage } from './styled';

type Props = {
  avatar: string | null;
  alt?: string;
};

const ProfileImage = ({ avatar, alt }: Props): JSX.Element => {
  const defaultAvatar = 'images/avatar-temporary.svg';
  return (
    <StyledImageWrapper>
      <StyledImage alt={alt || 'Avatar'} src={avatar || defaultAvatar} />
    </StyledImageWrapper>
  );
};

export default ProfileImage;
