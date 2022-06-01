import { gql } from '@apollo/client';

export default gql`
  mutation CreateProduct($count: Int!, $price: Int!, $name: String!) {
    createProduct(count: $count, price: $price, name: $name) {
      product {
        count
        description
        id
        name
        pictureUrl
        price
      }
    }
  }
`