"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const base_1 = __importDefault(require("./base"));
const user_1 = __importDefault(require("./user"));
const task_1 = __importDefault(require("./task"));
const project_1 = __importDefault(require("./project"));
exports.default = (0, merge_1.mergeTypeDefs)([base_1.default, user_1.default, task_1.default, project_1.default]);
//# sourceMappingURL=index.js.map