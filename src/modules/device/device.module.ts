import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { DeviceService } from "./device.service";
import { DeviceProviders } from "./device.providers";
import { DeviceController } from "./device.controller";
import { AuthModule } from "../auth/auth.module";
import { JwtModule } from "@nestjs/jwt";
import { UsersService } from "../user/user.service";
import { GroupService } from "../group/group.service";
import { RoleService } from "../role/role.service";

@Module({
  imports: [DatabaseModule, AuthModule, JwtModule],
  controllers: [DeviceController],
  providers: [...DeviceProviders, DeviceService, UsersService, GroupService, RoleService],
  exports: [DeviceService],
})
export class DeviceModule {}
