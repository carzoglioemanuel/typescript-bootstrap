import { AppDataSource } from "database/data-source";
import { TreeUser } from "../entities/TreeUser.entity";

export const treeUserRepository = AppDataSource.getRepository(TreeUser).extend(
  {}
);
