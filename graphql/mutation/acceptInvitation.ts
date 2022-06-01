import { gql } from '@apollo/client';

export default gql`
  mutation AcceptInvitation($input: AcceptInvitationInput!) {
    acceptInvitation(input: $input) {
      me {
        avatarUrl
        birthdate
        bonusBalance
        bonusAllowance
        email
        firstName
        id
        lastName
        login
        role
      }
    }
  }
`