import { Router, Request, Response, NextFunction } from "express";
import Controller from "../interfaces/controller.interface";

class HealthCheckController implements Controller {
  public path = "/healthCheck";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.healthCheckStatus);
  }

  private healthCheckStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => res.status(200).end();
}

export default HealthCheckController;
