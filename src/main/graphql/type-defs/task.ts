import { gql } from "apollo-server-express";

export default gql`
  type Task {
    id: ID!
    title: String!
    description: String
    status: String
  }

  input TaskInput {
    title: String!
    description: String
  }

  type TaskResult {
    task: Task
  }

  extend type Mutation {
    createTask(task: TaskInput): TaskResult @auth
    deleteTask(id: ID!): Boolean @auth
    updateTaskStatus(id: ID!, status: String!): TaskResult @auth
  }
`;
