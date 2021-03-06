import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'admin',
      password:'admin',
      database:'postgres',
      schema:'admin',
      synchronize:false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
