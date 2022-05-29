import { gql } from '@apollo/client';

export default gql`
  mutation signin($input: SignInInput!) {
    signin(input: $input) {
      accessToken
      me {
        activities(
          events: [USER_LOGGED_IN]
          after: "string"
          before: "string"
          first: 1
          last: 1
        )
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