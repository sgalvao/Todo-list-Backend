"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenProvider = void 0;
class TokenProvider {
    generate() {
        return String(Math.floor(100000 + Math.random() * 900000));
    }
}
exports.TokenProvider = TokenProvider;
//# sourceMappingURL=token-provider.js.map