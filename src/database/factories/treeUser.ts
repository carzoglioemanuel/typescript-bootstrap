import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { TreeUser } from "../entities/TreeUser.entity";

define(TreeUser, () => {
  const treeUser = new TreeUser();
  treeUser.idUser = faker.datatype.uuid();
  treeUser.description = faker.lorem.sentence();
  treeUser.name = faker.name.firstName();
  treeUser.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800000,
  });
  treeUser.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  treeUser.deletedAt = null;
  return treeUser;
});
