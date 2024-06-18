import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasResolver } from './preguntas.resolver';

@Module({
  providers: [PreguntasResolver, PreguntasService],
})
export class PreguntasModule {}
