import { Module } from '@nestjs/common';
import { RespuestasService } from './respuestas.service';
import { RespuestasResolver } from './respuestas.resolver';

@Module({
  providers: [RespuestasResolver, RespuestasService],
})
export class RespuestasModule {}
