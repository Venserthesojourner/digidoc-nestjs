import { EntityRepository, Repository } from 'typeorm';

import { CliDocumentoDigitalizado } from 'src/modules/cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';

@EntityRepository(CliDocumentoDigitalizado)
export class CliDocumentoDigitalizadoRepository extends Repository<CliDocumentoDigitalizado> {}
