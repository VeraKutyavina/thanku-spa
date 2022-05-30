import { gql } from '@apollo/client';

export default gql`
  query Users {
    users {
      edges {
        node {
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
`