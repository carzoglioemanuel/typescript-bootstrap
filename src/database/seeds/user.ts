import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { User } from "database/entities/User";

define(User, (deletedAt: boolean) => {
  const user = new User();
  user.email = faker.internet.email();
  user.verified = faker.datatype.boolean();
  user.reputation = faker.datatype.number({ min: 1, max: 10 });
  user.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800,
  });
  user.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  user.deletedAt = deletedAt
    ? faker.datatype.datetime({
        min: 1641006000,
        max: 1717470000,
      })
    : null;
  return user;
});
