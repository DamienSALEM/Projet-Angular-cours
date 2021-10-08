import { Module } from '@nestjs/common';
import { ArticleModule } from 'src/article/article.module';
import { CategoryModule } from 'src/category/category.module';


@Module({
    imports: [ArticleModule, CategoryModule],
    controllers:[],
    providers:[]
})
export class CatsPerArticlesModule {}
