"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateProject = exports.makeLoadUserByToken = exports.makeLoadProject = exports.makeDeleteProject = exports.makeCreateProject = exports.makeUpdateTask = exports.makeDeleteTask = exports.makeCreateTask = exports.makeCreateAccount = exports.makeAuthentication = void 0;
const services_1 = require("@/domain/services");
const providers_1 = require("@/infra/providers");
const repositories_1 = require("@/infra/repositories");
const makeAuthentication = () => {
    const userRepository = new repositories_1.UserRepository();
    const hashProvider = new providers_1.HashProvider();
    const jwtProvider = new providers_1.JwtProvider();
    const authenticationService = new services_1.AuthenticationService(userRepository, hashProvider, jwtProvider);
    return authenticationService;
};
exports.makeAuthentication = makeAuthentication;
const makeCreateAccount = () => {
    const userRepository = new repositories_1.UserRepository();
    const hashProvider = new providers_1.HashProvider();
    const createUserService = new services_1.CreateUserService(userRepository, hashProvider);
    return createUserService;
};
exports.makeCreateAccount = makeCreateAccount;
const makeCreateTask = () => {
    const taskRepository = new repositories_1.TaskRepository();
    const createTaskService = new services_1.CreateTaskService(taskRepository);
    return createTaskService;
};
exports.makeCreateTask = makeCreateTask;
const makeDeleteTask = () => {
    const taskRepository = new repositories_1.TaskRepository();
    const deleteTaskService = new services_1.DeleteTaskService(taskRepository);
    return deleteTaskService;
};
exports.makeDeleteTask = makeDeleteTask;
const makeUpdateTask = () => {
    const taskRepository = new repositories_1.TaskRepository();
    const updateTaskStatusService = new services_1.UpdateTaskStatusService(taskRepository);
    return updateTaskStatusService;
};
exports.makeUpdateTask = makeUpdateTask;
const makeCreateProject = () => {
    const projectRepository = new repositories_1.ProjectRepository();
    const createProjectService = new services_1.CreateProjectService(projectRepository);
    return createProjectService;
};
exports.makeCreateProject = makeCreateProject;
const makeDeleteProject = () => {
    const projectRepository = new repositories_1.ProjectRepository();
    const taskRepository = new repositories_1.TaskRepository();
    const deleteProjectService = new services_1.DeleteProjectService(projectRepository, taskRepository);
    return deleteProjectService;
};
exports.makeDeleteProject = makeDeleteProject;
const makeLoadProject = () => {
    const projectRepository = new repositories_1.ProjectRepository();
    const loadProjectService = new services_1.LoadProjectsService(projectRepository);
    return loadProjectService;
};
exports.makeLoadProject = makeLoadProject;
const makeLoadUserByToken = () => {
    const userRepository = new repositories_1.UserRepository();
    const jwtProvider = new providers_1.JwtProvider();
    const loadUserByTokenService = new services_1.LoadUserByTokenService(userRepository, jwtProvider);
    return loadUserByTokenService;
};
exports.makeLoadUserByToken = makeLoadUserByToken;
const makeUpdateProject = () => {
    const projectRepository = new repositories_1.ProjectRepository();
    const updateProjectService = new services_1.UpdateProjectService(projectRepository);
    return updateProjectService;
};
exports.makeUpdateProject = makeUpdateProject;
//# sourceMappingURL=index.js.map