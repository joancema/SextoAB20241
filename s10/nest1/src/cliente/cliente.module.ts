import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
  imports: [ TypeOrmModule.forFeature([Cliente]) ],
  exports: [ TypeOrmModule ]
})
export class ClienteModule {}
