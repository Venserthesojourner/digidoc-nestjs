import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { protocolo } from '../protocolo/entity/protocolo.entity';
import { ProtocoloService } from '../protocolo/protocolo.service';
import { CreateProtocoloMaternidadIngresoDto } from './dto/create-mat-ingreso-prot.dto';
import { UpdateProtocoloMaternidadIngresoDto } from './dto/update-mat-ingreso-prot.dto';
import { protocoloMaternidadIngreso } from './entity/mat_protocolo_ingreso.entity';

@Injectable()
export class protocoloMaternidadIngresoService extends ProtocoloService {
  constructor(
    @InjectRepository(protocoloMaternidadIngreso)
    private readonly matProtIngresoRepo: Repository<protocoloMaternidadIngreso>,
    @InjectRepository(protocolo)
    private readonly protocoloRepo: Repository<protocolo>,
  ) {
    super(protocoloRepo);
  }

  async createProtMatIngreso(
    protocolo: CreateProtocoloMaternidadIngresoDto,
  ): Promise<protocoloMaternidadIngreso> {
    // TODO: Fijarme si necesita su DTO o puedo usar el de Protocolo a secas.
    return await this.matProtIngresoRepo.save(protocolo);
  }

  async getAll(): Promise<protocoloMaternidadIngreso[]> {
    return await this.matProtIngresoRepo.find();
  }

  async getOne(id: number): Promise<protocoloMaternidadIngreso> {
    const protocoloFound = await this.matProtIngresoRepo.findOneBy({
      id: id,
    });
    return protocoloFound;
  }

  async updateOne(
    id: number,
    coso: UpdateProtocoloMaternidadIngresoDto,
  ): Promise<protocoloMaternidadIngreso> {
    await this.matProtIngresoRepo.update({ id: id }, coso);
    const updated = await this.matProtIngresoRepo.findOneBy({ id: id });
    return updated;
  }
}
