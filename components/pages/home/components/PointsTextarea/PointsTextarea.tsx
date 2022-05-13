import React from 'react';
import { ItemWrapper, Textarea, customButtonStyles } from './styled';
import Button from 'components/shared/atoms/Button';

const PointsTextarea = () => {
  return(
    <ItemWrapper>
      <Textarea placeholder="+100 @username add description for #win-win-win" />
      <Button type='submit' customStyles={customButtonStyles} > Give </Button>
    </ItemWrapper>
  )
}

export default PointsTextarea;