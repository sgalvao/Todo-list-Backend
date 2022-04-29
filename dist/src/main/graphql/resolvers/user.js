"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        login: () => {
            return {
                id: 1,
                name: 'Divisio'
            };
        }
    },
    Mutation: {
        createUser: async (_, { user }) => {
            return user;
        }
    }
};
//# sourceMappingURL=user.js.map