import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatsPerArticlesModule } from './cats-per-articles.module';
import { CatsPerArticles } from './entity/cats-per-articlesentity';
import { CatsperarticlesDTO } from './cats-per-articles.dto';
import { Article } from 'src/article/entity/article.entity';

@Injectable()
export class CatsPerArticlesService {
    constructor(
        @InjectRepository(CatsPerArticles)
        private catsperarticlesRepository:Repository<CatsPerArticles>,
    ){}

}
