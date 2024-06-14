import { Module } from '@nestjs/common';
import { RespuestaService } from './respuesta.service';
import { RespuestaController } from './respuesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Respuesta } from './entities/respuesta.entity';

@Module({
  controllers: [RespuestaController],
  providers: [RespuestaService],
  imports: [ TypeOrmModule.forFeature([Respuesta]) ],
  exports: [TypeOrmModule]
})
export class RespuestaModule {}
