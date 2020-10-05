import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCategoriesTable1599983361024 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "created_at",
            type: "datetime",
            default: "now()",
            isNullable: true,
          },
          {
            name: "updated_at",
            type: "datetime",
            default: "now()",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("categories");
  }
}
