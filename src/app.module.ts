import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'honeylite',
  database: 'movie_app',
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [MovieModule, TypeOrmModule.forRoot(ormOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
