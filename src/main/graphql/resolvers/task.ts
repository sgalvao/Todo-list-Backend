import {
  makeCreateTask,
  makeDeleteTask,
  makeUpdateTask,
} from "@/main/factories";

export default {
  Mutation: {
    createTask: (_, { task }, { userId }) => {
      return makeCreateTask().create({ ...task });
    },
    deleteTask: (_, { id }, { userId }) => {
      return makeDeleteTask().delete(id);
    },
    updateTaskStatus: (_, { id }, { userId }) => {
      return makeUpdateTask().update(id);
    },
  },
};
