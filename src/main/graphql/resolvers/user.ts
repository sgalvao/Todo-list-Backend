export default {
  Query: {
    login: () => {
      return {
        id: 1,
        name: 'Divisio'
      }
    }
  },
  Mutation: {
    createUser: async (_, { user }) => {
      return user
    }
  }
}
