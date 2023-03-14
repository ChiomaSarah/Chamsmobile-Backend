import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from 'src/DTO/create-movie.dto';
import { UpdateMovieDto } from 'src/DTO/update-movie.dto';
import { MovieEntity } from 'src/Entity/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity) private repo: Repository<MovieEntity>,
  ) {}

  async getAllMovies() {
    return await this.repo.find();
  }

  async addNewMovie(createMovieDto: CreateMovieDto) {
    const movie = new MovieEntity();
    const { title, director, genre, year } = createMovieDto;
    movie.title = title;
    movie.director = director;
    movie.genre = genre;
    movie.year = year;

    this.repo.create(movie);
    return this.repo.save(movie);
  }

  async updateMovie(updateMovieDto: UpdateMovieDto, id: string) {
    await this.repo.update(id, updateMovieDto);
    return this.repo.findOneBy({ id });
  }

  async deleteMovie(id: string) {
    return await this.repo.delete(id);
  }
}
