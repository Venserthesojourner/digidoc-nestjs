import { Test, TestingModule } from '@nestjs/testing';
import { CliDocumentoDigitalizadoService } from './cli-documento-digitalizado.service';

describe('CliDocumentoDigitalizadoService', () => {
  let service: CliDocumentoDigitalizadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliDocumentoDigitalizadoService],
    }).compile();

    service = module.get<CliDocumentoDigitalizadoService>(
      CliDocumentoDigitalizadoService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
