import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { TreeTemplate } from "./TreeTemplate.entity";

@Entity("TreeUser")
export class TreeUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  idUser: string;

  @Column()
  name: string;

  @Column()
  description: string;

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
}
