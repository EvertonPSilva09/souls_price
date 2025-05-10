import { Test, TestingModule } from '@nestjs/testing';
import { SoulsController } from './souls.controller';
import { SoulsService } from './souls.service';

describe('SoulsController', () => {
  let controller: SoulsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoulsController],
      providers: [SoulsService],
    }).compile();

    controller = module.get<SoulsController>(SoulsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
