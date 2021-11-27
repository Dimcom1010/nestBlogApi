import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  topic: string;

  // @Column("text")
  // text: string;

  @Column()
  likes: number;

  @Column({ default: true })
  like_position: boolean;
}
