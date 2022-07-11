import { AppDataSource } from "database/dataSource";
import { SkillTreeNode } from "../entities/SkillTreeNode.entity";

export const skillTreeNodeRepository = AppDataSource.getRepository(
  SkillTreeNode
).extend({});
