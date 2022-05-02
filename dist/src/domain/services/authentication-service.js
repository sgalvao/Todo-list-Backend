"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const env_1 = __importDefault(require("@/config/env"));
class AuthenticationService {
    constructor(userRepository, hashProvider, jwtProvider) {
        this.userRepository = userRepository;
        this.hashProvider = hashProvider;
        this.jwtProvider = jwtProvider;
    }
    async auth(params) {
        const user = await this.userRepository.findByEmail(params.email);
        if (!user) {
            throw new Error("User or password invalid");
        }
        const isValidPassword = await this.hashProvider.compareHash(params.password, user.password);
        if (!isValidPassword) {
            throw new Error("User or password invalid");
        }
        const token = this.jwtProvider.encryptToken(user.email, env_1.default.jwtSecret);
        return Object.assign(user, { token });
    }
}
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication-service.js.map