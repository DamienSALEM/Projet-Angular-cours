import { Controller, Post, UseGuards, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async register(@Body() articleDto: ArticleDto){
    return await this.articleService.create(articleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.articleService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() articleDto: ArticleDto): Promise<void> {
    return this.articleService.update(id, articleDto);
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
      return this.articleService.find(id);
  }  

  @Get()
  async findAll() {
      return await this.articleService.findAll();
  }

  @Post('/:title')
  async findByName(@Param('title') title: string) {
      return await this.articleService.findByTitle(title)
  }
}