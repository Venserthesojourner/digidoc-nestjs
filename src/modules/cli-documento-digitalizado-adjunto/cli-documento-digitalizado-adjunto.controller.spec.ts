import { Test, TestingModule } from '@nestjs/testing';
import { CliDocumentoDigitalizadoAdjuntoController } from './cli-documento-digitalizado-adjunto.controller';
import { CliDocumentoDigitalizadoAdjuntoService } from './cli-documento-digitalizado-adjunto.service';

describe('CliDocumentoDigitalizadoAdjuntoController', () => {
  let controller: CliDocumentoDigitalizadoAdjuntoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CliDocumentoDigitalizadoAdjuntoController],
      providers: [CliDocumentoDigitalizadoAdjuntoService],
    }).compile();

    controller = module.get<CliDocumentoDigitalizadoAdjuntoController>(
      CliDocumentoDigitalizadoAdjuntoController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
