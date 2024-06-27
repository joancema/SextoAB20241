import { Module } from '@nestjs/common';
import { CiudadanoService } from './ciudadano.service';
import { CiudadanoGateway } from './ciudadano.gateway';

@Module({
  providers: [CiudadanoGateway, CiudadanoService],
})
export class CiudadanoModule {}
