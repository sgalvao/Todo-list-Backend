import { gql } from "apollo-server-express";

export default gql`
  type Project {
    id: ID!
    title: String!
    tasks: [Task]
  }

  input ProjectInput {
    title: String!
  }

  type ProjectResult {
    project: Project
  }

  extend type Mutation {
    createProject(project: ProjectInput): ProjectResult @auth
    deleteProject(id: ID!): Boolean @auth
  }

  extend type Query {
    loadProjects: [Project] @auth
  }
`;
