import { Test, TestingModule } from '@nestjs/testing';
import { SerologiaService } from './serologia.service';

describe('SerologiaService', () => {
  let service: SerologiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerologiaService],
    }).compile();

    service = module.get<SerologiaService>(SerologiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
