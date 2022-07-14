import { Router, Request, Response, NextFunction } from "express";
import { treeTemplateRepository } from "../../database/repositories/treeTemplate.repository";
import { TreeTemplate } from "../../database/entities/TreeTemplate.entity";
import NotFoundException from "../../exceptions/NotFound.exception";
import Controller from "../../interfaces/controller.interface";

class TreeTemplateController implements Controller {
  public getOne = "/api/private/tree-templates/:id";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.getOne}`, this.getOneTreeTemplate);
  }

  private getOneTreeTemplate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const treeTemplateId: string = req.params.id;
    try {
      const treeTemplate: TreeTemplate = await treeTemplateRepository.findOneBy(
        {
          id: treeTemplateId,
        }
      );
      if (!treeTemplate) throw new NotFoundException();
      res.status(200).send(treeTemplate);
    } catch (error) {
      next(error);
    }
  };
}

export default TreeTemplateController;
