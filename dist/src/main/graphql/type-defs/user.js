"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
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
`;
//# sourceMappingURL=user.js.map