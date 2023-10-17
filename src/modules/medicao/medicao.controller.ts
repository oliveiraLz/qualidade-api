import { Controller, UseGuards, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { AuthGuard } from "../../guards/auth.guard";
import { RoleGuard } from "../../guards/role.guard";
import { CreateMedicaoDto } from "./dto/create-medicao.dto";
import { UpdateMedicaoDto } from "./dto/update-medicao.dto";
import { MedicaoEntity } from "./entities/medicao.entity";
import { MedicaoService } from "./medicao.service";
import { Roles } from "src/decorators/role.decorator";
import { Role } from "src/enums/role.enum";

@Controller("medicao")
@UseGuards(AuthGuard, RoleGuard)
export class MedicaoController {
  constructor(private readonly medicaoService: MedicaoService) {}

  @Roles(Role.USUARIO_WRITE)
  @Post()
  create(@Body() createMedicaoDto: CreateMedicaoDto): Promise<MedicaoEntity> {
    return this.medicaoService.create(createMedicaoDto);
  }
  @Roles(Role.USUARIO_READ)
  @Get(":id")
  findOne(@Param("id") id: string): Promise<MedicaoEntity> {
    return this.medicaoService.findOne(id);
  }
  @Roles(Role.USUARIO_READ)
  @Get()
  findAll(): Promise<MedicaoEntity[]> {
    return this.medicaoService.findAll();
  }
  @Roles(Role.USUARIO_WRITE)
  @Put(":id")
  update(@Param("id") id: string, @Body() updateMedicaoDto: UpdateMedicaoDto): Promise<MedicaoEntity> {
    return this.medicaoService.update(id, updateMedicaoDto);
  }
  @Roles(Role.USUARIO_DELETE)
  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.medicaoService.remove(id);
  }
}
