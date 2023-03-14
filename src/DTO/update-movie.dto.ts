import { IsNotEmpty } from 'class-validator';

export class UpdateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  director: string;

  @IsNotEmpty()
  genre: string;

  @IsNotEmpty()
  year: number;
}
