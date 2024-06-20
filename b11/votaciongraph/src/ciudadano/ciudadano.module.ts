import { Module } from '@nestjs/common';
import { CiudadanoService } from './ciudadano.service';
import { CiudadanoResolver } from './ciudadano.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudadano } from './entities/ciudadano.entity';

@Module({
  providers: [CiudadanoResolver, CiudadanoService],
  imports: [ TypeOrmModule.forFeature([Ciudadano]) ],
  exports: [ TypeOrmModule ],
})
export class CiudadanoModule {}
