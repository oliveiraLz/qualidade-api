import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { MedicaoEntity } from "./entities/medicao.entity";
import { CreateMedicaoDto } from "./dto/create-medicao.dto";
import { UpdateMedicaoDto } from "./dto/update-medicao.dto";

@Injectable()
export class MedicaoService {
  constructor(
    @Inject("MEDICAO_REPOSITORY")
    private medicaoRepository: Repository<MedicaoEntity>
  ) {}

  async create(createMedicaoDto: CreateMedicaoDto): Promise<MedicaoEntity> {
    const medicao = this.medicaoRepository.create(createMedicaoDto);
    return this.medicaoRepository.save(medicao);
  }

  async findOne(id: string): Promise<MedicaoEntity> {
    const medicao = await this.medicaoRepository.findOne({ where: { id } });

    if (!medicao) {
      throw new NotFoundException(`Medicao com ID ${id} não encontrada.`);
    }

    return medicao;
  }

  async findAll() {
    const medicao = await this.medicaoRepository.find();
    return medicao;
  }

  async update(id: string, updateMedicaoDto: UpdateMedicaoDto): Promise<MedicaoEntity> {
    const medicao = await this.findOne(id);

    this.medicaoRepository.merge(medicao, updateMedicaoDto);
    return this.medicaoRepository.save(medicao);
  }

  async remove(id: string): Promise<string> {
    const medicao = await this.findOne(id);
    await this.medicaoRepository.remove(medicao);
    return `Medição com ID ${id} foi removida com sucesso.`;
  }
}
