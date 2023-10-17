import moment from "moment";
import { MedicaoEntity } from "../entities/medicao.entity";

export class FindMedicaoDto {
  id: string;
  date: string;
  device_id: string;
  valor: string;

  constructor(data: MedicaoEntity) {
    this.id = data.id;
    this.date = moment(data.date).format("DD/MM/YYYY");
    this.device_id = data.device_id;
    this.valor = data.valor;
  }
}
