import { defaultFieldResolver } from "graphql";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";
import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
import { makeLoadUserByToken } from "@/main/factories";

export const authDirective = (schema, directiveName) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];
      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async function (source, args, context, info) {
          const accessToken = context?.req?.headers?.["authorization"];
          if (!accessToken) {
            throw new ForbiddenError("Token not provided");
          }
          const user = await makeLoadUserByToken().load(accessToken);
          if (!user) {
            throw new AuthenticationError("Not authorized");
          }
          return resolve(
            source,
            args,
            Object.assign(context, { userId: user.id }),
            info
          );
        };
        return fieldConfig;
      }
    },
  });
};
