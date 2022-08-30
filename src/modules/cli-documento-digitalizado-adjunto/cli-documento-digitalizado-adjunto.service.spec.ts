import { Test, TestingModule } from '@nestjs/testing';
import { CliDocumentoDigitalizadoAdjuntoService } from './cli-documento-digitalizado-adjunto.service';

describe('CliDocumentoDigitalizadoAdjuntoService', () => {
  let service: CliDocumentoDigitalizadoAdjuntoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliDocumentoDigitalizadoAdjuntoService],
    }).compile();

    service = module.get<CliDocumentoDigitalizadoAdjuntoService>(
      CliDocumentoDigitalizadoAdjuntoService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
