import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'xicf99.h.filess.io',
  port: 3307,
  username: 'movies_brushlion',
  password: '2d145a9165a66a130a41869bfeaf4661c678ea2f',
  database: 'movies_brushlion',
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [MovieModule, TypeOrmModule.forRoot(ormOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
