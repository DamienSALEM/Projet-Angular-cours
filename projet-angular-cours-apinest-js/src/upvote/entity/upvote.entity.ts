import { Article } from 'src/article/entity/article.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Upvote {

  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(type=> Article, Article => Article.ID)
  @JoinColumn()
  Article: Article;

  @Column({nullable: false})
  Upvote: number;
}