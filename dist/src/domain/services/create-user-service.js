"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
class CreateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(params) {
        const checkEmail = await this.userRepository.findByEmail(params.email);
        if (checkEmail) {
            throw new Error("Email already exists");
        }
        const user = await this.userRepository.create(params);
        return user;
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=create-user-service.js.map