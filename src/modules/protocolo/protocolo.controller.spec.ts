import { Test, TestingModule } from '@nestjs/testing';
import { ProtocoloController } from './protocolo.controller';

describe('ProtocoloController', () => {
  let controller: ProtocoloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtocoloController],
    }).compile();

    controller = module.get<ProtocoloController>(ProtocoloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
