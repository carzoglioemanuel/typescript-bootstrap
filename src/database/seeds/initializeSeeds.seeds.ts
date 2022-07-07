import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { TreeTemplate } from "../entities/TreeTemplate.entity";
import { TreeUser } from "../entities/TreeUser.entity";
import { SkillTreeNode } from "../entities/SkillTreeNode.entity";

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // Create treeTemplate's
    const treeTemplates = await factory(TreeTemplate)().createMany(15);

    // Create deleted treeUser's associated to treeTemplates randomly
    await factory(TreeUser)()
      .map(async (treeUser) => {
        treeUser.treeTemplates =
          treeTemplates[Math.floor(Math.random() * treeTemplates.length)];
        return treeUser;
      })
      .createMany(30, { deletedAt: new Date(1641006000) });

    // Create treeUser's associated to treeTemplates randomly
    await factory(TreeUser)()
      .map(async (treeUser) => {
        treeUser.treeTemplates =
          treeTemplates[Math.floor(Math.random() * treeTemplates.length)];
        return treeUser;
      })
      .createMany(70);

    // Create skillTreeNode's associated to treeTemplates randomly
    await factory(SkillTreeNode)()
      .map(async (skillTreeNode) => {
        skillTreeNode.treeTemplates =
          treeTemplates[Math.floor(Math.random() * treeTemplates.length)];
        return skillTreeNode;
      })
      .createMany(80);

    // Create skillTreeNode's (deleted and not deleted) with hasChildren and the children
    await factory(SkillTreeNode)()
      .createMany(15, {
        hasChildren: true,
        treeTemplates:
          treeTemplates[Math.floor(Math.random() * treeTemplates.length)],
      })
      .then(async (skillTreesNode) => {
        await factory(SkillTreeNode)()
          .map(async (skillTreeNode) => {
            skillTreeNode.treeTemplates =
              treeTemplates[Math.floor(Math.random() * treeTemplates.length)];
            skillTreeNode.idFather =
              skillTreesNode[Math.floor(Math.random() * skillTreesNode.length)];
            return skillTreeNode;
          })
          .createMany(300);
        await factory(SkillTreeNode)()
          .map(async (skillTreeNode) => {
            skillTreeNode.treeTemplates =
              treeTemplates[Math.floor(Math.random() * treeTemplates.length)];
            skillTreeNode.idFather =
              skillTreesNode[Math.floor(Math.random() * skillTreesNode.length)];
            return skillTreeNode;
          })
          .createMany(150, { deletedAt: new Date(1641006000) });
      });

    // Create deleted skillTreeNode's
    await factory(SkillTreeNode)()
      .map(async (skillTreeNode) => {
        skillTreeNode.treeTemplates =
          treeTemplates[Math.floor(Math.random() * treeTemplates.length)];
        return skillTreeNode;
      })
      .createMany(20, { deletedAt: new Date(1641006000) });
  }
}
