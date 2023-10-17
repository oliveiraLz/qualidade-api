import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableJogadores1689683312839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` 
                  CREATE TABLE acesso.participantes (
                    id uuid DEFAULT uuid_generate_v4() NOT NULL,
                    imagem  varchar NOT NULL,
                    nome varchar NOT NULL,
                    jogadores varchar[] NOT NULL, -- Use varchar[] to represent an array of strings
                    telefone  varchar NOT NULL,
                    email  varchar NOT NULL,
                    create_at timestamp NOT NULL DEFAULT now(),
                    update_at timestamp NOT NULL DEFAULT now(),
                    deleted_at timestamp NULL,
                    primary key (id)
                  );
        
                  CREATE UNIQUE INDEX participantes_email_idx ON acesso.participantes USING btree (email)
                  
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                  DROP TABLE IF EXISTS acesso.participantes;
                `);
  }
}
