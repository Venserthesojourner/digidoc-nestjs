import { Injectable } from '@nestjs/common';
import { protocolo } from './entity/protocolo.entity';
import { Repository } from 'typeorm';

import { CreateProtocoloDto } from 'src/modules/protocolo/dto/create.protocolo.dto';
import { UpdateProtocoloDto } from './dto/update.protocolo.dto';
import { InjectRepository } from '@nestjs/typeorm';
//import { DeleteProtocoloDto } from './dto/delete.protocolo.dto';

@Injectable()
export class ProtocoloService {
  constructor(
    @InjectRepository(protocolo)
    private readonly protocoloRepository: Repository<protocolo>,
  ) {}

  async findAllProtocols(): Promise<protocolo[]> {
    const protocolList = await this.protocoloRepository.find();
    return protocolList;
  }

  async getSingleProtocol(id: number): Promise<protocolo> {
    const protocolFound = await this.protocoloRepository.findOneBy({ id: id });
    return protocolFound;
  }

  async addProtocol(protocolo: CreateProtocoloDto): Promise<protocolo> {
    return await this.protocoloRepository.save(protocolo);
  }

  async updateProtocol(
    id: number,
    updateProtocoloDto: UpdateProtocoloDto,
  ): Promise<protocolo> {
    await this.protocoloRepository.update({ id }, updateProtocoloDto);
    const updatedProtocol = await this.protocoloRepository.findOneBy({
      id: id,
    });
    return updatedProtocol;
  }

  async deleteProtocol(
    id: number /* deleteProtocoloDto: DeleteProtocoloDto */,
  ) {
    return `Borra Dito${id}`;
  }
}
