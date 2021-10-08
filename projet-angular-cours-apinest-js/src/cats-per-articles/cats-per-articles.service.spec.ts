import { Test, TestingModule } from '@nestjs/testing';
import { CatsPerArticlesService } from './cats-per-articles.service';

describe('CatsPerArticlesService', () => {
  let service: CatsPerArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsPerArticlesService],
    }).compile();

    service = module.get<CatsPerArticlesService>(CatsPerArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
