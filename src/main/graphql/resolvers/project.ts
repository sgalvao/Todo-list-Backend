import {
  makeCreateProject,
  makeDeleteProject,
  makeLoadProject,
  makeUpdateProject,
} from "@/main/factories";

export default {
  Query: {
    loadProjects: (_, {}, { userId }) => {
      return makeLoadProject().load(userId);
    },
  },
  Mutation: {
    createProject: (_, { name }, { userId }) => {
      return makeCreateProject().create({ name, userId });
    },
    deleteProject: (_, { id }, { userId }) => {
      return makeDeleteProject().delete(id);
    },
    updateProject: (_, { id, name }, { userId }) => {
      return makeUpdateProject().update(id, name);
    },
  },
};
