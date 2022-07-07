import "dotenv/config";
import App from "./app";
import healthCheckController from "./components/healthCheck/healthCheck.controller";
import validateEnv from "./utils/validateEnv";

validateEnv();

const app = new App([new healthCheckController()]);

app.listen();
