import { Articles } from 'src/article/entity/article.entity';
import { Category } from 'src/category/Entity/category.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatsPerArticles {

  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(type => Articles, Article => Article.ID)
  @JoinColumn()
  Article: Articles;

  @ManyToOne(type => Category, Category => Category.ID)
  @JoinColumn()
  Category: Category;
}