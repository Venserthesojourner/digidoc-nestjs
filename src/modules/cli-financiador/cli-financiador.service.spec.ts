import { Test, TestingModule } from '@nestjs/testing';
import { CliFinanciadorService } from './cli-financiador.service';

describe('CliFinanciadorService', () => {
  let service: CliFinanciadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliFinanciadorService],
    }).compile();

    service = module.get<CliFinanciadorService>(CliFinanciadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
