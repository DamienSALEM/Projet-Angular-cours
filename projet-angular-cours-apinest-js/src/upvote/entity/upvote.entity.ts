import { Articles } from 'src/article/entity/article.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Upvote {

  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(type=> Articles, Article => Article.ID)
  @JoinColumn()
  Article: Articles;

  @Column({nullable: false})
  Upvote: number;
}