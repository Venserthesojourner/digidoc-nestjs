import { Test, TestingModule } from '@nestjs/testing';
import { CliDocumentoDigitalizadoController } from './cli-documento-digitalizado.controller';
import { CliDocumentoDigitalizadoService } from './cli-documento-digitalizado.service';

describe('CliDocumentoDigitalizadoController', () => {
  let controller: CliDocumentoDigitalizadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CliDocumentoDigitalizadoController],
      providers: [CliDocumentoDigitalizadoService],
    }).compile();

    controller = module.get<CliDocumentoDigitalizadoController>(
      CliDocumentoDigitalizadoController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
