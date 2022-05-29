import { gql } from '@apollo/client';

export default gql`
  mutation signin($input: SignInInput!) {
    signin(input: $input) {
      accessToken
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
      refreshToken
    }
  }
`