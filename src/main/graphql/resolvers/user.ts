import { makeAuthentication, makeCreateAccount } from "@/main/factories";

export default {
  Query: {
    login: (_, args) => makeAuthentication().auth(args),
  },
  Mutation: {
    createUser: async (_, { user }) => makeCreateAccount().create(user),
  },
};
