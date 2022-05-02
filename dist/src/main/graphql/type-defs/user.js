"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
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

  extend type Mutation {
    createUser(user: UserInput): User
    login(email: String!, password: String!): UserResult
  }
`;
//# sourceMappingURL=user.js.map