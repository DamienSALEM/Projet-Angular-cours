import { Module } from '@nestjs/common';
import { ArticleModule } from 'src/article/article.module';
import { CategoryModule } from 'src/category/category.module';
import { CatsPerArticlesService } from './cats-per-articles.service';
import { CatsPerArticlesController } from './cats-per-articles.controller';


@Module({
    imports: [ArticleModule, CategoryModule],
    controllers:[CatsPerArticlesController],
    providers:[CatsPerArticlesService]
})
export class CatsPerArticlesModule {}
