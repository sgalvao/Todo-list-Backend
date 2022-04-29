"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_1 = require("@/config/prisma");
class UserRepository {
    async create(params) {
        const user = await prisma_1.prisma.user.create({
            data: {
                ...params,
            },
        });
        return user;
    }
    async findByEmail(email) {
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map