import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Base } from "../../../decorators/base.entity";
import { DeviceEntity } from "../../device/entities/device.entity";

@Entity({ name: "medicao", schema: "qualidade" })
export class MedicaoEntity extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  date: Date;

  @Column()
  device_id: string;

  @Column()
  valor: string;

  @ManyToOne(() => DeviceEntity, (device) => device.medicao)
  @JoinColumn({ name: "device_id" })
  device: DeviceEntity;
}
