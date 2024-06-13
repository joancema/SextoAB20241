import { Module } from '@nestjs/common';
import { CiudadanoService } from './ciudadano.service';
import { CiudadanoController } from './ciudadano.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudadano } from './entities/ciudadano.entity';

@Module({
  controllers: [CiudadanoController],
  providers: [CiudadanoService],
  imports: [TypeOrmModule.forFeature([Ciudadano])  ],
  exports: [ TypeOrmModule ],
})
export class CiudadanoModule {}
