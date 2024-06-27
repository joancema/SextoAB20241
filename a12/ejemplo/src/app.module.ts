import { Module } from '@nestjs/common';
import { CiudadanoModule } from './ciudadano/ciudadano.module';

@Module({
  imports: [CiudadanoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
