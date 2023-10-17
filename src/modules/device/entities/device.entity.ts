import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Base } from "../../../decorators/base.entity";
import { MedicaoEntity } from "../../medicao/entities/medicao.entity";
@Entity({ name: "device", schema: "qualidade" })
export class DeviceEntity extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  gps: string;

  @OneToMany(() => MedicaoEntity, (medicao) => medicao.device)
  medicao: MedicaoEntity[];
}
