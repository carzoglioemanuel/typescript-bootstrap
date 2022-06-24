import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { Ban } from "database/entities/Ban";

define(Ban, (deletedAt: boolean) => {
  const ban = new Ban();
  ban.description = faker.lorem.sentence(20);
  ban.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800,
  });
  ban.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  ban.deletedAt = deletedAt
    ? faker.datatype.datetime({
        min: 1641006000,
        max: 1717470000,
      })
    : null;
  return ban;
});
