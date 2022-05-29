import { gql } from '@apollo/client';

export default gql`
  mutation signout($input: SignOutInput!) {
    signout(input: $input) {
      message
    }
  }

`