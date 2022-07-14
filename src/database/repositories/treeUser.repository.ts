import { AppDataSource } from "../dataSource";
import { TreeUser } from "../entities/TreeUser.entity";

export const treeUserRepository = AppDataSource.getRepository(TreeUser).extend(
  {}
);
