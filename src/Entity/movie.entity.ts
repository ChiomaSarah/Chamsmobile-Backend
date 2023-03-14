import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column()
  director: string;

  @Column()
  genre: string;

  @Column()
  year: number;
}
