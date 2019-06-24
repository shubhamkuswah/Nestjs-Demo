import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


@Module({
  imports: [ContactsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 41673,
      username: 'postgress',
      password: 'sellnews',
      database: 'mydb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
