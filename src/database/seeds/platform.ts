import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { Platform } from "database/entities/Platform";

define(Platform, (deletedAt: boolean) => {
  const platform = new Platform();
  platform.name = faker.company.companyName();
  platform.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800,
  });
  platform.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  platform.deletedAt = deletedAt
    ? faker.datatype.datetime({
        min: 1641006000,
        max: 1717470000,
      })
    : null;
  return platform;
});
