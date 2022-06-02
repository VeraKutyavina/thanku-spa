import { gql } from '@apollo/client';

export default gql`
  query BonusTransfers($first: Int, $userId: ID, $kind: BonusTransfersKind)  {
    bonusTransfers(first: $first, userId: $userId, kind: $kind) {
      edges {
        cursor
        node {
          amount
          comment
          id
          receiver {
            avatarUrl
            email
            firstName
            id
            lastName
            login
          }
          sender {
            avatarUrl
            email
            firstName
            id
            lastName
            login
          }
        }
      }
    }
  }
`