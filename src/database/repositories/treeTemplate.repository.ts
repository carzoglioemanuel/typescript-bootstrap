import { AppDataSource } from "database/dataSource";
import { TreeTemplate } from "../entities/TreeTemplate.entity";

export const treeTemplateRepository = AppDataSource.getRepository(
  TreeTemplate
).extend({});
