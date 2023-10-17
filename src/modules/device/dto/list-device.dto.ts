import { DeviceEntity } from "../entities/device.entity";

export class FindDeviceDto {
  id: string;
  name: string;
  gps: string;

  constructor(data: DeviceEntity) {
    this.id = data.id;
    this.name = data.name;
    this.gps = data.gps;
  }
}
