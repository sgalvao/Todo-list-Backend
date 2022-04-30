import {
  makeCreateTask,
  makeDeleteTask,
  makeUpdateTask,
} from "@/main/factories";

export default {
  Mutation: {
    createTask: (_, { task }, { userId }) => {
      console.log("🚀🚀  TASK resolver CREATE ARGS:", task);
      return makeCreateTask().create({ ...task });
    },
    deleteTask: (_, { id }, { userId }) => {
      console.log("🚀🚀  TASK resolver DELETE ARGS:", id);
      return makeDeleteTask().delete(id);
    },
    updateTaskStatus: (_, { id }, { userId }) => {
      console.log("🚀🚀  TASK resolver DELETE ARGS:", id);
      return makeUpdateTask().update(id);
    },
  },
};
