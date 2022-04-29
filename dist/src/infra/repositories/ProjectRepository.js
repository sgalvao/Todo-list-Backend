"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const prisma_1 = require("@/config/prisma");
class ProjectRepository {
    async create(params) {
        const project = await prisma_1.prisma.project.create({
            data: {
                ...params,
            },
        });
        return project;
    }
    async load() {
        const project = await prisma_1.prisma.project.findMany({
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
}
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=ProjectRepository.js.map