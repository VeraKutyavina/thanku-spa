import User from './user';

type BonusTransfersType = {
  amount: number,
  comment: string,
  id: number,
  receiver: User,
  sender: User,
}

export default BonusTransfersType;