import { EntityRepository, Repository } from 'typeorm';
import { protocolo } from '../entity/protocolo.entity';

@EntityRepository(protocolo)
export class ProtocoloRepository extends Repository<protocolo> {}
