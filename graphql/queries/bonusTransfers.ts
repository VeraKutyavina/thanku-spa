import { gql } from '@apollo/client';

export default gql`
  query BonusTransfers($first: Int)  {
    bonusTransfers(first: $first) {
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