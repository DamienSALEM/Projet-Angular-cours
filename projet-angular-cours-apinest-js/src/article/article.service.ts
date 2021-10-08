
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleDto } from './dto/article.dto';
import { Articles } from './entity/article.entity';

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Articles)
        private articleRepository: Repository<Articles>,
        ) {}

  async create(createArticleDto: ArticleDto): Promise<Articles> {
    const { Title, Resume, Text, date_post, Image, Users } = createArticleDto;
    const article: Articles = await this.articleRepository.create({Title, Resume, Text, date_post, Image, Users});
    return await this.articleRepository.save(article);
  }

  async remove(id: string): Promise<void> {
    await this.articleRepository.delete(id);
  }

  async update(id: string, updateArticleDto: ArticleDto): Promise<void> {
    await this.articleRepository.update(id, updateArticleDto);
  }
  
  async find(ID: number): Promise<Articles> {
    return this.articleRepository.findOne({ID});
  }

  async findByTitle(Title: string): Promise<Articles> {
    return this.articleRepository.findOne({Title});
  }

  async findAll(): Promise<Articles[]> {
      return this.articleRepository.find();
  }
}
