import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateMovieDto } from 'src/DTO/create-movie.dto';
import { UpdateMovieDto } from 'src/DTO/update-movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @Post()
  addNewMovie(@Body(ValidationPipe) data: CreateMovieDto) {
    return this.movieService.addNewMovie(data);
  }

  @Patch(':id')
  updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.updateMovie(updateMovieDto, id);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(id);
  }
}
