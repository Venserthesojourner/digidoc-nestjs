import { Test, TestingModule } from '@nestjs/testing';
import { CliFinanciadorPacienteService } from './cli-financiador-paciente.service';

describe('CliFinanciadorPacienteService', () => {
  let service: CliFinanciadorPacienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliFinanciadorPacienteService],
    }).compile();

    service = module.get<CliFinanciadorPacienteService>(CliFinanciadorPacienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
