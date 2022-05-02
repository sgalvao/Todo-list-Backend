"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProjectsService = void 0;
class LoadProjectsService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async load(userId) {
        const project = await this.projectRepository.load(userId);
        return project;
    }
}
exports.LoadProjectsService = LoadProjectsService;
//# sourceMappingURL=load-project-service.js.map