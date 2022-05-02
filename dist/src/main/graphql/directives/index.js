"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authDirective = void 0;
const graphql_1 = require("graphql");
const apollo_server_express_1 = require("apollo-server-express");
const utils_1 = require("@graphql-tools/utils");
const factories_1 = require("@/main/factories");
const authDirective = (schema, directiveName) => {
    return (0, utils_1.mapSchema)(schema, {
        [utils_1.MapperKind.OBJECT_FIELD]: (fieldConfig) => {
            const authDirective = (0, utils_1.getDirective)(schema, fieldConfig, directiveName)?.[0];
            if (authDirective) {
                const { resolve = graphql_1.defaultFieldResolver } = fieldConfig;
                fieldConfig.resolve = async function (source, args, context, info) {
                    const accessToken = context?.req?.headers?.["authorization"];
                    if (!accessToken) {
                        throw new apollo_server_express_1.ForbiddenError("Token not provided");
                    }
                    const user = await (0, factories_1.makeLoadUserByToken)().load(accessToken);
                    if (!user) {
                        throw new apollo_server_express_1.AuthenticationError("Not authorized");
                    }
                    return resolve(source, args, Object.assign(context, { userId: user.id }), info);
                };
                return fieldConfig;
            }
        },
    });
};
exports.authDirective = authDirective;
//# sourceMappingURL=index.js.map