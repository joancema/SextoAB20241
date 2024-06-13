import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadanoModule } from './ciudadano/ciudadano.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CiudadanoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'MysecretPassword',
      database: 'clases',
      synchronize: true,
      autoLoadEntities: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
