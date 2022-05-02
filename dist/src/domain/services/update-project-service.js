"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectService = void 0;
class UpdateProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async update(id, name) {
        const isValid = await this.projectRepository.findById(id);
        if (!isValid) {
            throw new Error("Project not found");
        }
        const project = await this.projectRepository.update(id, name);
        return project;
    }
}
exports.UpdateProjectService = UpdateProjectService;
//# sourceMappingURL=update-project-service.js.map