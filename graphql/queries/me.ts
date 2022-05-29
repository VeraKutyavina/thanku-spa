import { gql } from '@apollo/client';

export default gql`
  query CurrentUser {
    me {
      avatarUrl
      birthdate
      bonusAllowance
      bonusBalance
      confirmedAt
      email
      firstName
      id
      lastName
      login
      role
    }
  }
`