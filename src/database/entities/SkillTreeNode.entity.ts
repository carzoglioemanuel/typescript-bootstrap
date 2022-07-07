import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { TreeTemplate } from "./TreeTemplate.entity";

@Entity("SkillTreeNode")
export class SkillTreeNode {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  idSkill: string;

  @Column()
  hasChildren: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne((type) => TreeTemplate)
  @JoinColumn({ name: "idTreeTemplate" })
  treeTemplates?: TreeTemplate;

  @ManyToOne((type) => SkillTreeNode, (s) => s.children)
  @JoinColumn({ name: "idFather" })
  idFather?: SkillTreeNode;

  @OneToMany((type) => SkillTreeNode, (s) => s.idFather)
  children?: SkillTreeNode[];
}
