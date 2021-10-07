import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { CatsPerArticlesModule } from './cats-per-articles/cats-per-articles.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import { UpvoteModule } from './upvote/upvote.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    CommentaireModule,
    CatsPerArticlesModule,
    CategoryModule,
    ArticleModule,
    UpvoteModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "mysql-heroes.alwaysdata.net",
      port: 3306,
      username: "heroes",
      password: "heroesIpssi2021",
      database: "heroes_wikijv",
      autoLoadEntities: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
