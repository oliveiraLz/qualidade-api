import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { DeviceEntity } from "./entities/device.entity";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { FindDeviceDto } from "./dto/list-device.dto";

@Injectable()
export class DeviceService {
  constructor(
    @Inject("DEVICE_REPOSITORY")
    private deviceRepository: Repository<DeviceEntity>
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<DeviceEntity> {
    const device = this.deviceRepository.create(createDeviceDto);
    return this.deviceRepository.save(device);
  }

  async findOne(id: string): Promise<FindDeviceDto> {
    const device = await this.deviceRepository.findOne({ where: { id } });

    if (!device) {
      throw new NotFoundException(`Dispositivo com ID ${id} não encontrado.`);
    }

    return new FindDeviceDto(device);
  }

  async findAll(): Promise<FindDeviceDto[]> {
    const devices = await this.deviceRepository.find();
    const dtos = devices.map((device) => new FindDeviceDto(device));
    return dtos;
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<DeviceEntity> {
    const device = await this.findOne(id);
    Object.assign(device, updateDeviceDto);
    return this.deviceRepository.save(device);
  }

  async remove(id: string): Promise<string> {
    const device = await this.findOne(id);
    if (!device) {
      throw new NotFoundException(`Dispositivo com ID ${id} não encontrado.`);
    }

    await this.deviceRepository.remove(device as DeviceEntity);

    return `Dispositivo com ID ${id} foi removido com sucesso.`;
  }
}
