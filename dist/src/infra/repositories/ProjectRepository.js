"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const prisma_1 = require("@/config/prisma");
class ProjectRepository {
    async create(params) {
        const project = await prisma_1.prisma.project.create({
            data: {
                name: params.name,
                userId: params.userId,
            },
        });
        return project;
    }
    async load(userId) {
        const project = await prisma_1.prisma.project.findMany({
            where: {
                userId,
            },
            include: {
                tasks: true,
            },
        });
        return project;
    }
    async delete(id) {
        const project = await prisma_1.prisma.project.delete({
            where: {
                id,
            },
        });
        return project;
    }
    async findById(id) {
        const project = await prisma_1.prisma.project.findUnique({
            where: {
                id,
            },
        });
        return project;
    }
    async update(id, name) {
        const project = await prisma_1.prisma.project.update({
            where: {
                id,
            },
            data: {
                name,
            },
        });
        return project;
    }
}
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=ProjectRepository.js.map