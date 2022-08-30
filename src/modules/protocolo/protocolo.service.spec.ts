import { Test, TestingModule } from '@nestjs/testing';
import { ProtocoloService } from './protocolo.service';

describe('ProtocoloService', () => {
  let service: ProtocoloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProtocoloService],
    }).compile();

    service = module.get<ProtocoloService>(ProtocoloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
