import { Article } from 'src/article/entity/article.entity';
import { Users } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Commentaire {

  @PrimaryGeneratedColumn()
  ID: number;

  @ManyToOne(type=> Article, Article => Article.ID)
  @JoinColumn()
  Article: Article;

  @Column({nullable: false})
  Text: string;

  @ManyToOne(type=> Users, User => User.ID)
  @JoinColumn()
  User: Users;
}