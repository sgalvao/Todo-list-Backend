import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: Int
    name: String
    email: String
  }

  input UserInput {
    name: String!
    email: String!
  }

  extend type Query {
    login(email: String!, password: String!): User
  }

  extend type Mutation {
    createUser(user: UserInput): User
  }
`
