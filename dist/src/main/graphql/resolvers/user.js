"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("@/main/factories");
exports.default = {
    Mutation: {
        createUser: async (_, { user }) => (0, factories_1.makeCreateAccount)().create(user),
        login: (_, args) => (0, factories_1.makeAuthentication)().auth(args),
    },
};
//# sourceMappingURL=user.js.map