"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
class CreateUserService {
    constructor(userRepository, hashProvider) {
        this.userRepository = userRepository;
        this.hashProvider = hashProvider;
    }
    async create(params) {
        const checkEmail = await this.userRepository.findByEmail(params.email);
        if (checkEmail) {
            throw new Error("Email already exists");
        }
        const passwordEncrypted = await this.hashProvider.createHash(params.password, 10);
        const userCreated = await this.userRepository.create({
            ...params,
            password: passwordEncrypted,
        });
        return userCreated;
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=create-user-service.js.map