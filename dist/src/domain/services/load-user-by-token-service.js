"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByTokenService = void 0;
const env_1 = __importDefault(require("@/config/env"));
class LoadUserByTokenService {
    constructor(userRepository, jwtProvider) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
    }
    async load(token) {
        let tokenDecrypted = null;
        try {
            tokenDecrypted = await this.jwtProvider.decryptToken(token, env_1.default.jwtSecret);
        }
        catch (error) {
            throw new Error("Token inválido");
        }
        if (tokenDecrypted) {
            const userEmail = tokenDecrypted["id"];
            const user = await this.userRepository.findByEmail(userEmail);
            if (user) {
                return user;
            }
        }
        return null;
    }
}
exports.LoadUserByTokenService = LoadUserByTokenService;
//# sourceMappingURL=load-user-by-token-service.js.map