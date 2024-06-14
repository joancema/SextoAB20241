import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadanosModule } from './ciudadanos/ciudadanos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreguntaModule } from './pregunta/pregunta.module';
import { RespuestaModule } from './respuesta/respuesta.module';

@Module({
  imports: [CiudadanosModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'MysecretPassword',
      database: 'clases',
      autoLoadEntities: true,
      synchronize: true,
    }), PreguntaModule, RespuestaModule,

  ],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
