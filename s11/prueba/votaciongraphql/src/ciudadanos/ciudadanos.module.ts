import { Module } from '@nestjs/common';
import { CiudadanosService } from './ciudadanos.service';
import { CiudadanosResolver } from './ciudadanos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudadano } from './entities/ciudadano.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Ciudadano ]) ],
  exports: [TypeOrmModule],
  providers: [CiudadanosResolver, CiudadanosService],
})
export class CiudadanosModule {}
