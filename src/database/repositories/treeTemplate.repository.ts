import { AppDataSource } from "database/data-source";
import { TreeTemplate } from "../entities/TreeTemplate.entity";

export const treeTemplateRepository = AppDataSource.getRepository(
  TreeTemplate
).extend({});
