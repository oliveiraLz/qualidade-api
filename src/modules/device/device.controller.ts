import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../../guards/auth.guard";
import { RoleGuard } from "../../guards/role.guard";
import { DeviceService } from "./device.service";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { Roles } from "src/decorators/role.decorator";
import { Role } from "src/enums/role.enum";

@Controller("device")
@UseGuards(AuthGuard, RoleGuard)
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Roles(Role.USUARIO_WRITE)
  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.create(createDeviceDto);
  }
  @Roles(Role.USUARIO_READ)
  @Get()
  findAll() {
    return this.deviceService.findAll();
  }
  @Roles(Role.USUARIO_READ)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.deviceService.findOne(id);
  }
  @Roles(Role.USUARIO_WRITE)
  @Put(":id")
  update(@Param("id") id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.deviceService.update(id, updateDeviceDto);
  }
  @Roles(Role.USUARIO_DELETE)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.deviceService.remove(id);
  }
}
