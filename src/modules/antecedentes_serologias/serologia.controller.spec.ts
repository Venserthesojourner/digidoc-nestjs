import { Test, TestingModule } from '@nestjs/testing';
import { SerologiaController } from './serologia.controller';

describe('SerologiaController', () => {
  let controller: SerologiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerologiaController],
    }).compile();

    controller = module.get<SerologiaController>(SerologiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
