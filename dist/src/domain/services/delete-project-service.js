"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProjectService = void 0;
class DeleteProjectService {
    constructor(projectRepository, taskRepository) {
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
    }
    async delete(id) {
        const isValidId = await this.projectRepository.findById(id);
        if (!isValidId) {
            throw new Error("Project not found");
        }
        const hasTasks = await this.taskRepository.findByProjectId(id);
        if (hasTasks) {
            await this.taskRepository.deleteAllByProjectId(id);
        }
        const project = await this.projectRepository.delete(id);
        return project;
    }
}
exports.DeleteProjectService = DeleteProjectService;
//# sourceMappingURL=delete-project-service.js.map