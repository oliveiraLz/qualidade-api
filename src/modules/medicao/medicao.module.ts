import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { MedicaoController } from "./medicao.controller";
import { MedicaoService } from "./medicao.service";
import { MedicaoProviders } from "./medicao.providers";
import { AuthModule } from "../auth/auth.module";
import { JwtModule } from "@nestjs/jwt";
import { GroupService } from "../group/group.service";
import { RoleService } from "../role/role.service";
import { UsersService } from "../user/user.service";

@Module({
  imports: [DatabaseModule, AuthModule, JwtModule],
  controllers: [MedicaoController],
  providers: [...MedicaoProviders, MedicaoService, UsersService, GroupService, RoleService],
  exports: [MedicaoService],
})
export class MedicaoModule {}
