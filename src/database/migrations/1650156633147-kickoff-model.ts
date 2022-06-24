import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class createUser1650156633147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "verified",
            type: "boolean",
            default: false,
          },
          {
            name: "reputation",
            type: "int",
            isNullable: true,
            default: null,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: null,
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "ban_type",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "kind",
            type: "varchar",
            default: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: null,
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "game",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: null,
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "platform",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: null,
          },
        ],
      })
    );
    // intermediate tables
    await queryRunner.createTable(
      new Table({
        name: "platform_game",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "platform_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "game_id",
            type: "uuid",
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "ban",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "platform_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "game_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "ban_type_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: null,
          },
        ],
      })
    );
    // foreign keys
    await queryRunner.createForeignKey(
      "platform_game",
      new TableForeignKey({
        columnNames: ["platform_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "platform",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "platform_game",
      new TableForeignKey({
        columnNames: ["game_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "game",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "ban",
      new TableForeignKey({
        columnNames: ["platform_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "platform",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "ban",
      new TableForeignKey({
        columnNames: ["game_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "game",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "ban",
      new TableForeignKey({
        columnNames: ["ban_type_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "ban_type",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "ban",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
