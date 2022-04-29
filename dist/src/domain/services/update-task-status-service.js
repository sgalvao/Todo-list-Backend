"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskStatusService = void 0;
class UpdateTaskStatusService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async update(id) {
        const task = await this.taskRepository.update(id);
        return task;
    }
}
exports.UpdateTaskStatusService = UpdateTaskStatusService;
//# sourceMappingURL=update-task-status-service.js.map