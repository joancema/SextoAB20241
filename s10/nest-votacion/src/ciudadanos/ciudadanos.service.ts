import { Injectable } from '@nestjs/common';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
import { Ciudadano } from './entities/ciudadano.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CiudadanosService {
  constructor(
    @InjectRepository(Ciudadano)
    private readonly ciudadanoRepository: Repository<Ciudadano>
  ) {
    
  }
  async create(createCiudadanoDto: CreateCiudadanoDto) {
    const ciudadano = this.ciudadanoRepository.create(createCiudadanoDto);
    return this.ciudadanoRepository.save(ciudadano);
  }

  async findAll() {
    return await this.ciudadanoRepository.find();
  }

  async findOne(id: string) {
    return await this.ciudadanoRepository.findOneBy({id});
  }

  async update(id: string, updateCiudadanoDto: UpdateCiudadanoDto) {
    const updated= await this.ciudadanoRepository.update(id, updateCiudadanoDto);
    return await this.findOne(id)
    
  }

  async remove(id: string) {
    const deleted = await this.ciudadanoRepository.delete(id);
    return deleted;
  }
}
