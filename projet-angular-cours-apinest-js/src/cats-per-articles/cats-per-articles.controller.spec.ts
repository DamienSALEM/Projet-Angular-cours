import { Test, TestingModule } from '@nestjs/testing';
import { CatsPerArticlesController } from './cats-per-articles.controller';

describe('CatsPerArticlesController', () => {
  let controller: CatsPerArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsPerArticlesController],
    }).compile();

    controller = module.get<CatsPerArticlesController>(CatsPerArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
