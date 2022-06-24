import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { Game } from "database/entities/Game";

define(Game, (deletedAt: boolean) => {
  const game = new Game();
  game.name = faker.company.companyName();
  game.createdAt = faker.datatype.datetime({
    min: 1420081200000,
    max: 1657594800,
  });
  game.updatedAt = faker.datatype.datetime({
    min: 1609470000,
    max: 1689130800,
  });
  game.deletedAt = deletedAt
    ? faker.datatype.datetime({
        min: 1641006000,
        max: 1717470000,
      })
    : null;
  return game;
});
