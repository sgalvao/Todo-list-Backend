"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectService = void 0;
class CreateProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async create(params) {
        const project = await this.projectRepository.create(params);
        return project;
    }
}
exports.CreateProjectService = CreateProjectService;
//# sourceMappingURL=create-project-service.js.map