import { MigrationInterface, QueryRunner } from "typeorm";

export class createDeviceTable1697224957283 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE SCHEMA IF NOT EXISTS qualidade;

          CREATE TABLE qualidade.device (
            id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
            name VARCHAR NOT NULL,
            gps VARCHAR,
            create_at TIMESTAMP(0) DEFAULT now(),
            update_at TIMESTAMP(0) DEFAULT now(),
            deleted_at TIMESTAMP(0) WITHOUT TIME ZONE          )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          DROP TABLE IF EXISTS qualidade.device
        `);
  }
}
