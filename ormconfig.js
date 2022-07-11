module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/database/entities/**/*{.ts,.js}"],
  seeds: ["src/database/seeds/**/*{.ts,.js}"],
  factories: ["src/database/factories/**/*{.ts,.js}"],
};
