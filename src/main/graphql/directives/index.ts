import { defaultFieldResolver } from "graphql";
import { ForbiddenError } from "apollo-server-express";
import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";

const getUserByAccessToken = (accessToken) => {
  return {
    id: 1,
    name: "Silvio",
    token: accessToken,
  };
};

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
        fieldConfig.resolve = function (source, args, context, info) {
          const accessToken = context?.req?.headers?.["authorization"];

          const user = getUserByAccessToken(accessToken);
          if (!user) {
            throw new ForbiddenError("not authorized");
          }
          return resolve(source, args, Object.assign(context, { user }), info);
        };
        return fieldConfig;
      }
    },
  });
};
