import { AppDataSource } from "../dataSource";
import { SkillTreeNode } from "../entities/SkillTreeNode.entity";

export const skillTreeNodeRepository = AppDataSource.getRepository(
  SkillTreeNode
).extend({});
