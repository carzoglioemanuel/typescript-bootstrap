import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { SkillTreeNode } from "../entities/SkillTreeNode.entity";

define(SkillTreeNode, () => {
  const skillTreeNode = new SkillTreeNode();
  skillTreeNode.idSkill = faker.datatype.uuid();
  skillTreeNode.hasChildren = faker.datatype.boolean();
  skillTreeNode.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800000,
  });
  skillTreeNode.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  skillTreeNode.deletedAt = null;
  return skillTreeNode;
});
