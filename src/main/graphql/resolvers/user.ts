import { makeAuthentication, makeCreateAccount } from "@/main/factories";

export default {
  Mutation: {
    createUser: async (_, { user }) => makeCreateAccount().create(user),
    login: (_, args) => makeAuthentication().auth(args),
  },
};
