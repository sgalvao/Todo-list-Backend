import {
  makeCreateTask,
  makeDeleteTask,
  makeUpdateTask,
} from "@/main/factories";

export default {
  Mutation: {
    createProject: (_, { args }, { userId }) => {
      makeCreateTask().create({ ...args, userId });
    },
    deleteProject: (_, { args }, { userId }) => {
      makeDeleteTask().delete({ ...args, userId });
    },
    updateTaskStatus: (_, { args }, { userId }) => {
      makeUpdateTask().update({ ...args, userId });
    },
  },
};
