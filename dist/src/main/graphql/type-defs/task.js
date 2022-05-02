"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=task.js.map