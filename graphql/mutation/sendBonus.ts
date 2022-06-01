import { gql } from '@apollo/client';

export default gql`
  mutation SendBonus($amount: Int!, $comment: String!, $receiverId: ID) {
    sendBonus(amount: $amount, comment: $comment, receiverId: $receiverId) {
      bonusTransfer {
        amount
      }
    }
  }

`