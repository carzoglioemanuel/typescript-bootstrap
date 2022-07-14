import "dotenv/config";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import healthCheckController from "./components/healthCheck/healthCheck.controller";
import TreeTemplateController from "./components/treeTemplate/treeTemplate.controller";

validateEnv();

const app = new App([
  new healthCheckController(),
  new TreeTemplateController(),
]);

app.listen();
