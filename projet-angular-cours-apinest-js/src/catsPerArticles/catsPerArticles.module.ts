import { Module } from '@nestjs/common';
import { ArticleModule } from 'src/article/article.module';

@Module({
    imports: [ArticleModule, CategoryModule],
})
export class CategoryModule {}
