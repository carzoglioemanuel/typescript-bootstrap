import { AppDataSource } from "database/dataSource";
import { TreeUser } from "../entities/TreeUser.entity";

export const treeUserRepository = AppDataSource.getRepository(TreeUser).extend(
  {}
);
