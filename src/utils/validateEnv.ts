import { cleanEnv, host, port, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    JWT_SECRET: str(),
    PORT: port(),
    DB_HOST: host(),
    DB_PORT: port(),
    DB_USERNAME: str(),
    DB_PASSWORD: str(),
    DB_NAME: str(),
    DB_DIALECT: str(),
  });
}

export default validateEnv;
