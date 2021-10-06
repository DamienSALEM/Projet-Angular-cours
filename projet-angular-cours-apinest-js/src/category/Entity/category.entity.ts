import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  ID: number;

  @Column({nullable: false})
  Cat_Name: string;
}