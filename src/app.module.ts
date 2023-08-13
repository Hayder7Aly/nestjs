import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { BookModule } from './book/book.module'; // Import the BookModule
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgres://maujqhwm:yvgjg8wn6qFVWvQdeEbLDiHEcGC8Fz5O@trumpet.db.elephantsql.com/maujqhwm",
      // host: 'trumpet.db.elephantsql.com',
      // port: 5432,
      // username: 'maujqhwm',
      // password: 'yvgjg8wn6qFVWvQdeEbLDiHEcGC8Fz5O',
      // database: 'book',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
 
    }),
    BookModule, // Include the BookModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

