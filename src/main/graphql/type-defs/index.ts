import { mergeTypeDefs } from "@graphql-tools/merge";

import baseTypes from "./base";
import userTypes from "./user";
import taskTypes from "./task";
import projectTypes from "./project";

export default mergeTypeDefs([baseTypes, userTypes, taskTypes, projectTypes]);
