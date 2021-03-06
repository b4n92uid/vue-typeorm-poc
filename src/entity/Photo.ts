import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  url: string;

  @Column()
  views: number;

  @ManyToOne(() => User, user => user.photos)
  user: User;
}
