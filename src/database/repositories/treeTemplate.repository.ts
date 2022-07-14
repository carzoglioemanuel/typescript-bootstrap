import { AppDataSource } from "../dataSource";
import { TreeTemplate } from "../entities/TreeTemplate.entity";

export const treeTemplateRepository = AppDataSource.getRepository(
  TreeTemplate
).extend({});
