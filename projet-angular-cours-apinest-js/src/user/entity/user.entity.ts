import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Name: string;

  @Column()
  Surname: string;

  @Column({nullable: false})
  Mail: string;

  @Column({nullable: false})
  User_name: string;

  @Column({nullable: false})
  Password: string;

  @Column()
  phone: number;

  @Column({nullable: false})
  Upvote: number;

  @Column()
  Role: string;
}