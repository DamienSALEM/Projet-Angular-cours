import { Users } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {

  @PrimaryGeneratedColumn()
  ID: number;

  @Column({nullable: false})
  Title: string;

  @Column({nullable: false})
  Resume: string;

  @Column({nullable: false})
  Text: string;

  @Column({nullable: false})
  date_post: Date;

  @Column()
  Image: string;

  @ManyToOne(type => Users, User => User.ID)
  @JoinColumn()
  User: Users;
}