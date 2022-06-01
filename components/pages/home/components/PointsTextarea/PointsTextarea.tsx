import React, {useState} from 'react';
import { useUsers } from 'lib/apollo/users';
import { useSendBonus } from 'lib/apollo/bonus';

import Button from 'components/shared/atoms/Button';
import { ItemWrapper, Textarea, customButtonStyles } from './styled';

const PointsTextarea = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState(undefined);
  const { users } = useUsers();
  const [sendBonus] = useSendBonus();

  const onClick = () => {
    const [,points] = text.match(/\+(.*[0-9])/) || [];
    const [,login] = text.match(/@(.*)/) || [];
    
    if (!points || !login) return setError('Пожалуйста, введите количество бонусов и логин получателя');

    const receiver = users.find(({ login: userLogin }) => userLogin  === login.split(' ')[0]);
    if (!receiver) return setError('Пожалуйста, введите существуещего получателя');

    setError('');

    setText('');

    sendBonus({ amount: +points, comment: text, receiverId: receiver.id })
  }
  
  return(
    <ItemWrapper>
      <Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="+100 @username add description for #win-win-win" />
      <Button type='submit' onClick={onClick} customStyles={customButtonStyles} > Give </Button>
      <span className="error"> {error} </span>
    </ItemWrapper>
  )
}

export default PointsTextarea;