import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ArticleService } from './article.service';

@Module({
    imports: [UserModule],
    providers: [ArticleService]
})
export class ArticleModule {}
