import {
  AuthenticationService,
  CreateProjectService,
  CreateTaskService,
  CreateUserService,
  DeleteProjectService,
  DeleteTaskService,
  LoadProjectsService,
  LoadUserByTokenService,
  UpdateTaskStatusService,
} from "@/domain/services";
import { HashProvider, JwtProvider } from "@/infra/providers";
import {
  ProjectRepository,
  TaskRepository,
  UserRepository,
} from "@/infra/repositories";

export const makeAuthentication = () => {
  const userRepository = new UserRepository();
  const hashProvider = new HashProvider();
  const jwtProvider = new JwtProvider();

  const authenticationService = new AuthenticationService(
    userRepository,
    hashProvider,
    jwtProvider
  );
  return authenticationService;
};

export const makeCreateAccount = () => {
  const userRepository = new UserRepository();
  const hashProvider = new HashProvider();
  const createUserService = new CreateUserService(userRepository, hashProvider);
  return createUserService;
};

export const makeCreateTask = () => {
  const taskRepository = new TaskRepository();
  const createTaskService = new CreateTaskService(taskRepository);
  return createTaskService;
};

export const makeDeleteTask = () => {
  const taskRepository = new TaskRepository();
  const deleteTaskService = new DeleteTaskService(taskRepository);
  return deleteTaskService;
};

export const makeUpdateTask = () => {
  const taskRepository = new TaskRepository();
  const updateTaskStatusService = new UpdateTaskStatusService(taskRepository);
  return updateTaskStatusService;
};

export const makeCreateProject = () => {
  const projectRepository = new ProjectRepository();
  const createProjectService = new CreateProjectService(projectRepository);
  return createProjectService;
};

export const makeDeleteProject = () => {
  const projectRepository = new ProjectRepository();
  const taskRepository = new TaskRepository();
  const deleteProjectService = new DeleteProjectService(
    projectRepository,
    taskRepository
  );
  return deleteProjectService;
};

export const makeLoadProject = () => {
  const projectRepository = new ProjectRepository();
  const loadProjectService = new LoadProjectsService(projectRepository);
  return loadProjectService;
};

export const makeLoadUserByToken = () => {
  const userRepository = new UserRepository();
  const jwtProvider = new JwtProvider();
  const loadUserByTokenService = new LoadUserByTokenService(
    userRepository,
    jwtProvider
  );
  return loadUserByTokenService;
};
