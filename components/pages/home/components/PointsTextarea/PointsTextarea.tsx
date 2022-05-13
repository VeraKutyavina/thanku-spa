import React from 'react';
import Button from 'components/shared/atoms/Button';

import { ItemWrapper, Textarea, customButtonStyles } from './styled';

const PointsTextarea = () => {
  return(
    <ItemWrapper>
      <Textarea placeholder="+100 @username add description for #win-win-win" />
      <Button type='submit' customStyles={customButtonStyles} > Give </Button>
    </ItemWrapper>
  )
}

export default PointsTextarea;