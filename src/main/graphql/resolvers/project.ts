import {
  makeCreateProject,
  makeDeleteProject,
  makeLoadProject,
} from "@/main/factories";

export default {
  Query: {
    loadProjects: (_, {}, { userId }) => {
      makeLoadProject().load(userId);
    },
  },
  Mutation: {
    createProject: (_, { args }, { userId }) => {
      makeCreateProject().create({ ...args, userId });
    },
    deleteProject: (_, { args }, { userId }) => {
      makeDeleteProject().delete({ ...args, userId });
    },
  },
};
