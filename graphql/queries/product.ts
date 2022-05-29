import { gql } from '@apollo/client';

export default gql`
  query CurrentUser {
    products {
      edges {
        node {
          count
          description
          id
          pictureUrl
          price
          name
        }
      }
    }
  }
`