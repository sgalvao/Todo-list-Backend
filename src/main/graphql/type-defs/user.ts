import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: String
    name: String
    email: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type UserResult {
    name: String
    email: String
    token: String
    id: String
  }

  type TokenResult {
    id: String
  }

  extend type Mutation {
    createUser(user: UserInput): User
    login(email: String!, password: String!): UserResult
  }
`;
