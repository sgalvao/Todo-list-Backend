"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskService = void 0;
class DeleteTaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async delete(id) {
        const task = await this.taskRepository.delete(id);
        return task;
    }
}
exports.DeleteTaskService = DeleteTaskService;
//# sourceMappingURL=delete-task-service.js.map