import { AppDataSource } from "database/data-source";
import { SkillTreeNode } from "../entities/SkillTreeNode.entity";

export const skillTreeNodeRepository = AppDataSource.getRepository(
  SkillTreeNode
).extend({});
