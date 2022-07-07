import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class kickoffModel1656605393954 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "SkillTreeNode",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "idSkill",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "idTreeTemplate",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "idFather",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "hasChildren",
            type: "boolean",
            isNullable: false,
            default: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "TreeTemplate",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "createdByIdUser",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            default: false,
          },
          {
            name: "name",
            type: "varchar",
            default: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "TreeUser",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "idTreeTemplate",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "idUser",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            default: false,
          },
          {
            name: "name",
            type: "varchar",
            default: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
    // foreign keys
    await queryRunner.createForeignKey(
      "TreeUser",
      new TableForeignKey({
        columnNames: ["idTreeTemplate"],
        referencedColumnNames: ["id"],
        referencedTableName: "TreeTemplate",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "SkillTreeNode",
      new TableForeignKey({
        columnNames: ["idTreeTemplate"],
        referencedColumnNames: ["id"],
        referencedTableName: "TreeTemplate",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "SkillTreeNode",
      new TableForeignKey({
        columnNames: ["idFather"],
        referencedColumnNames: ["id"],
        referencedTableName: "SkillTreeNode",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("SkillTreeNode");
    await queryRunner.dropTable("TreeUser");
    await queryRunner.dropTable("TreeTemplate");
  }
}
