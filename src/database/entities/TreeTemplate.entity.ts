import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { SkillTreeNode } from "./SkillTreeNode.entity";
import { TreeUser } from "./TreeUser.entity";

@Entity("TreeTemplate")
export class TreeTemplate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  createdByIdUser: string;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany((s) => SkillTreeNode, (s) => s.treeTemplates)
  skillTreeNode: SkillTreeNode[];

  @OneToMany((t) => TreeUser, (t) => t.treeTemplates)
  treeTemplate: TreeUser[];
}
