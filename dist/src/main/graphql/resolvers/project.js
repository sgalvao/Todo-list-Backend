"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("@/main/factories");
exports.default = {
    Query: {
        loadProjects: (_, {}, { userId }) => {
            console.log("🚀🚀  PROJECT resolver LOAD ARGS:", userId);
            return (0, factories_1.makeLoadProject)().load(userId);
        },
    },
    Mutation: {
        createProject: (_, { name }, { userId }) => {
            console.log("🚀🚀  project resolver ARGS:", userId);
            return (0, factories_1.makeCreateProject)().create({ name, userId });
        },
        deleteProject: (_, { id }, { userId }) => {
            console.log("🚀🚀  project resolver ARGS:", id);
            return (0, factories_1.makeDeleteProject)().delete(id);
        },
        updateProject: (_, { id, name }, { userId }) => {
            console.log("🚀🚀  project resolver ARGS:", id);
            return (0, factories_1.makeUpdateProject)().update(id, name);
        },
    },
};
//# sourceMappingURL=project.js.map