import { Module } from '@nestjs/common';
import { CiudadanoService } from './ciudadano.service';
import { CiudadanoController } from './ciudadano.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudadano } from './entities/ciudadano.entity';

@Module({
  imports: [  TypeOrmModule.forFeature([Ciudadano])   ],
  exports: [ TypeOrmModule ],
  controllers: [CiudadanoController],
  providers: [CiudadanoService],
})
export class CiudadanoModule {}
