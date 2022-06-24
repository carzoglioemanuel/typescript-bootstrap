import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import { AppDataSource } from "./database/data-source";
import * as express from "express";
import Controller from "./interfaces/controller.interface";
import errorMiddleware from "./middleware/error.middleware";

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`🚀 App listening on the port ${process.env.PORT} 🚀`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private async connectToTheDatabase() {
    try {
      await AppDataSource.initialize();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default App;
