import {
  makeCreateProject,
  makeDeleteProject,
  makeLoadProject,
  makeUpdateProject,
} from "@/main/factories";

export default {
  Query: {
    loadProjects: (_, {}, { userId }) => {
      console.log("🚀🚀  PROJECT resolver LOAD ARGS:", userId);
      return makeLoadProject().load(userId);
    },
  },
  Mutation: {
    createProject: (_, { name }, { userId }) => {
      console.log("🚀🚀  project resolver ARGS:", userId);
      return makeCreateProject().create({ name, userId });
    },
    deleteProject: (_, { id }, { userId }) => {
      console.log("🚀🚀  project resolver ARGS:", id);
      return makeDeleteProject().delete(id);
    },
    updateProject: (_, { id, name }, { userId }) => {
      console.log("🚀🚀  project resolver ARGS:", id);
      return makeUpdateProject().update(id, name);
    },
  },
};
