import { gql } from '@apollo/client';

export default gql`
  mutation InviteUser($userParams: InviteUserInput!) {
    inviteUser(userParams: $userParams) {
      invitedUser {
        avatarUrl
        email
      }
    }
  }
`