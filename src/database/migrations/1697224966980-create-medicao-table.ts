import { MigrationInterface, QueryRunner } from "typeorm";

export class createMedicaoTable1697224957283 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE qualidade.medicao (
        id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
        valor VARCHAR NOT NULL,
        device_id UUID NOT NULL,
        date TIMESTAMP(0) DEFAULT now(),
        CONSTRAINT fk_device FOREIGN KEY (device_id) REFERENCES qualidade.device(id),
        create_at TIMESTAMP(0) DEFAULT now(),
        update_at TIMESTAMP(0) DEFAULT now(),
        deleted_at TIMESTAMP(0) WITHOUT TIME ZONE

      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS qualidade.medicao
    `);
  }
}
