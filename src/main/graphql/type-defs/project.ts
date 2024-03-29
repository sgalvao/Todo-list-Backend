import { gql } from "apollo-server-express";

export default gql`
  type Project {
    id: ID!
    name: String!
    tasks: [Task]
  }

  input ProjectInput {
    name: String!
  }

  type ProjectResult {
    name: String
    tasks: [Task]
  }

  extend type Mutation {
    createProject(name: String): Project @auth
    deleteProject(id: ID!): Project @auth
    updateProject(id: ID!, name: String): Project @auth
  }

  extend type Query {
    loadProjects: [Project] @auth
  }
`;
