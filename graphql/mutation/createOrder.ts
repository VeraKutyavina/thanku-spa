import { gql } from '@apollo/client';

export default gql`
  mutation CreateOrder($productId: ID!, $quantity: Int!, $price: Int!) {
    createOrder(productId: $productId, quantity: $quantity, price: $price) {
      order {
        comment
      }
    }
  }
`