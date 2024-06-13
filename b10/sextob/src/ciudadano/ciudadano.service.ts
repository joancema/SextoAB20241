import { Injectable } from '@nestjs/common';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
import { Repository } from 'typeorm';
import { Ciudadano } from './entities/ciudadano.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CiudadanoService {
  constructor(
    @InjectRepository(Ciudadano)
    private readonly ciudadanoRepository: Repository<Ciudadano>
  ) {
  }
  async create(createCiudadanoDto: CreateCiudadanoDto) {
    const ciudadano = await this.ciudadanoRepository.create(createCiudadanoDto);
    return this.ciudadanoRepository.save(ciudadano);
  }
  async findAll() {
    return await this.ciudadanoRepository.find();
  }
  async findOne(id: string) {
    return await this.ciudadanoRepository.findOneBy({id});
  }
  async update(id: string, updateCiudadanoDto: UpdateCiudadanoDto) {
    const updated=  await this.ciudadanoRepository.update(id, updateCiudadanoDto);
    return updated.affected > 0 ? await this.ciudadanoRepository.findOneBy({id}) : null;
  }
  remove(id: string) {
    return this.ciudadanoRepository.delete(id);
  }
}
