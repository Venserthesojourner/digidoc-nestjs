import { EntityRepository, Repository } from 'typeorm';
import { episodio } from '../entity/episodio.entity';

@EntityRepository(episodio)
export class EpisodioRepository extends Repository<episodio> { }