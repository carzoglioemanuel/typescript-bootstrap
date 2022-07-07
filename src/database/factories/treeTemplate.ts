import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { TreeTemplate } from "../entities/TreeTemplate.entity";

define(TreeTemplate, () => {
  const treeTemplate = new TreeTemplate();
  treeTemplate.createdByIdUser = faker.datatype.uuid();
  treeTemplate.description = faker.lorem.sentence();
  treeTemplate.name = faker.name.firstName();
  treeTemplate.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800000,
  });
  treeTemplate.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  treeTemplate.deletedAt = null;
  return treeTemplate;
});
