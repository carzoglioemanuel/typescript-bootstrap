import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { BanType } from "database/entities/BanType";
import { banTypeValues } from "common/banType.enum";

define(BanType, (deletedAt: boolean) => {
  const banType = new BanType();
  banType.kind = faker.random.arrayElement(banTypeValues);
  banType.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800,
  });
  banType.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  banType.deletedAt = deletedAt
    ? faker.datatype.datetime({
        min: 1641006000,
        max: 1717470000,
      })
    : null;
  return banType;
});
