import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int
    name: String
    email: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type UserResult {
    user: User
    token: String
  }

  extend type Query {
    login(email: String!, password: String!): UserResult
  }

  extend type Mutation {
    createUser(user: UserInput): User
  }
`;
