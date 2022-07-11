import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "../config";

export const AppDataSource = new DataSource({
  type: config.database.DB_DIALECT as any,
  host: config.database.DB_HOST,
  port: config.database.DB_PORT as unknown as number,
  username: config.database.DB_USERNAME,
  password: config.database.DB_PASSWORD,
  database: config.database.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ["src/database/entities/**/*.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
  subscribers: [],
});
