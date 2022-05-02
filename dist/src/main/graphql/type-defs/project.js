"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
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
    createProject(name: String): ProjectResult @auth
    deleteProject(id: ID!): Project @auth
    updateProject(id: ID!, name: String): Project @auth
  }

  extend type Query {
    loadProjects: [Project] @auth
  }
`;
//# sourceMappingURL=project.js.map