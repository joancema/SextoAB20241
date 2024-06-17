import { Module } from '@nestjs/common';
import { CiudadanoService } from './ciudadano.service';
import { CiudadanoResolver } from './ciudadano.resolver';

@Module({
  providers: [CiudadanoResolver, CiudadanoService],
})
export class CiudadanoModule {}
