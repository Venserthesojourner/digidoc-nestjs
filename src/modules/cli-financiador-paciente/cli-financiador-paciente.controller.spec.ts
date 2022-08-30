import { Test, TestingModule } from '@nestjs/testing';
import { CliFinanciadorPacienteController } from './cli-financiador-paciente.controller';
import { CliFinanciadorPacienteService } from './cli-financiador-paciente.service';

describe('CliFinanciadorPacienteController', () => {
  let controller: CliFinanciadorPacienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CliFinanciadorPacienteController],
      providers: [CliFinanciadorPacienteService],
    }).compile();

    controller = module.get<CliFinanciadorPacienteController>(CliFinanciadorPacienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
