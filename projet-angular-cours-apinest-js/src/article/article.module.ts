import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Articles } from './entity/article.entity';

@Module({
    controllers: [ArticleController],
    imports: [
        UserModule,
        TypeOrmModule.forFeature([Articles])
    ],
    providers: [ArticleService],
    exports: [ArticleService]
})
export class ArticleModule {}