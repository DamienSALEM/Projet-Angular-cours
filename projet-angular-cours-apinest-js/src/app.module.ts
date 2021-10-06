import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { CatsPerArticlesModule } from './cats-per-articles/cats-per-articles.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import { UpvoteModule } from './upvote/upvote.module';

@Module({
  imports: [UserModule, CommentaireModule, CatsPerArticlesModule, CategoryModule, ArticleModule, UpvoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
