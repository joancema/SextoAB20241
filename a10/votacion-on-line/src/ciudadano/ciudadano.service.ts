import { Injectable } from '@nestjs/common';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
import { Repository } from 'typeorm';
import { Ciudadano } from './entities/ciudadano.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CiudadanoService {
  //dependency injection
  constructor(
    @InjectRepository(Ciudadano)
    private readonly ciudadanoRepository: Repository<Ciudadano>
  ){
  }


  async create(createCiudadanoDto: CreateCiudadanoDto) {
    const ciudadano = this.ciudadanoRepository.create(createCiudadanoDto);
    return this.ciudadanoRepository.save(ciudadano);
  }

  async findAll() {
    return this.ciudadanoRepository.find();
  }

  async findOne(id: string) {
    return this.ciudadanoRepository.findOneBy({id});
  }

  async update(id: string, updateCiudadanoDto: UpdateCiudadanoDto) {
    const ciudadano =  await this.ciudadanoRepository.update(id, updateCiudadanoDto);
    if (ciudadano.affected === 1) {
      return this.ciudadanoRepository.findOneBy({id});
    }
    return ciudadano;
  }

  remove(id: string) {
    return this.ciudadanoRepository.delete(id);
  }
}
