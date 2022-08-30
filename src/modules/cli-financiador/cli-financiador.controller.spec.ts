import { Test, TestingModule } from '@nestjs/testing';
import { CliFinanciadorController } from './cli-financiador.controller';
import { CliFinanciadorService } from './cli-financiador.service';

describe('CliFinanciadorController', () => {
  let controller: CliFinanciadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CliFinanciadorController],
      providers: [CliFinanciadorService],
    }).compile();

    controller = module.get<CliFinanciadorController>(CliFinanciadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
