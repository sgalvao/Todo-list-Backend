"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskService = void 0;
class CreateTaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(params) {
        const task = await this.taskRepository.create(params);
        return task;
    }
}
exports.CreateTaskService = CreateTaskService;
//# sourceMappingURL=create-task-service.js.map