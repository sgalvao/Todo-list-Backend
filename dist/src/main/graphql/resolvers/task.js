"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("@/main/factories");
exports.default = {
    Mutation: {
        createTask: (_, { task }, { userId }) => {
            console.log("🚀🚀  TASK resolver CREATE ARGS:", task);
            return (0, factories_1.makeCreateTask)().create({ ...task });
        },
        deleteTask: (_, { id }, { userId }) => {
            console.log("🚀🚀  TASK resolver DELETE ARGS:", id);
            return (0, factories_1.makeDeleteTask)().delete(id);
        },
        updateTaskStatus: (_, { id }, { userId }) => {
            console.log("🚀🚀  TASK resolver DELETE ARGS:", id);
            return (0, factories_1.makeUpdateTask)().update(id);
        },
    },
};
//# sourceMappingURL=task.js.map