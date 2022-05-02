"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const prisma_1 = require("@/config/prisma");
class TaskRepository {
    async create(params) {
        const task = await prisma_1.prisma.task.create({
            data: {
                name: params.name,
                description: params.description,
                projectId: params.projectId,
            },
        });
        return task;
    }
    async delete(id) {
        const task = await prisma_1.prisma.task.delete({
            where: {
                id,
            },
        });
        return task;
    }
    async update(id) {
        const task = await prisma_1.prisma.task.update({
            where: {
                id,
            },
            data: {
                status: "DONE",
                finishedAt: new Date().toISOString(),
            },
        });
        return task;
    }
    async deleteAllByProjectId(projectId) {
        const tasks = await prisma_1.prisma.task.deleteMany({
            where: {
                projectId,
            },
        });
        return tasks;
    }
    async findByProjectId(projectId) {
        const tasks = await prisma_1.prisma.task.findFirst({
            where: {
                id: projectId,
            },
        });
        return tasks;
    }
}
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=TaskRepository.js.map