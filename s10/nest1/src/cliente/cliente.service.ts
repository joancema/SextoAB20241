import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}
  create(createClienteDto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(cliente);
  }

  async findAll() {
    return await this.clienteRepository.find();
  }

  async findOne(id: string) {
    return await this.clienteRepository.findOneBy({ id });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    const updated= await this.clienteRepository.update(id, updateClienteDto);
    //return object after update
    return await this.findOne(id)
    
  }

  async remove(id: string) {
    const deleted = await this.clienteRepository.delete(id);
    return deleted;
  }
}
