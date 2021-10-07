import { Module } from '@nestjs/common';
import { ArticleModule } from 'src/article/article.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule, ArticleModule],
})
export class CommentaireModule {}
