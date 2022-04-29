"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProjectService = void 0;
class DeleteProjectService {
    constructor(projectRepository, taskRepository) {
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
    }
    async delete(params) {
        const hasTasks = await this.taskRepository.findByProjectId(params.id);
        if (hasTasks) {
            await this.taskRepository.deleteAllByProjectId(params.id);
        }
        const project = await this.projectRepository.delete(params.id);
        return project;
    }
}
exports.DeleteProjectService = DeleteProjectService;
//# sourceMappingURL=delete-project-service.js.map