import { gql } from '@apollo/client';

export default gql`
  mutation signUp($user: SignUpInput!, $company: CompanyInput!) {
    signup(user: $user, company: $company) {
      accessToken
      company {
        bonusAmount
        description
        id
      }
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