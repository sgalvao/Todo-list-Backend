import { gql } from "apollo-server-express";

export default gql`
  type Task {
    id: String!
    name: String!
    description: String
    status: String
  }

  input TaskInput {
    name: String!
    description: String
    projectId: String!
  }

  type TaskResult {
    id: String
    name: String
    description: String
    status: String
    finishedAt: String
  }

  extend type Mutation {
    createTask(task: TaskInput): Task @auth
    deleteTask(id: ID!): Task @auth
    updateTaskStatus(id: ID!): TaskResult @auth
  }
`;
