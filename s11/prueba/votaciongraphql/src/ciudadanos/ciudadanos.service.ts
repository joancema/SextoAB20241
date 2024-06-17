import { Injectable } from '@nestjs/common';
import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';
import { Repository } from 'typeorm';
import { Ciudadano } from './entities/ciudadano.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CiudadanosService {
  constructor(
    @InjectRepository(Ciudadano)
    private readonly ciudadanoRepository: Repository<Ciudadano>,
  ) {}
  async create(createCiudadanoInput: CreateCiudadanoInput): Promise<Ciudadano> {
    const ciudadano= this.ciudadanoRepository.create(createCiudadanoInput) ;
    return this.ciudadanoRepository.save(ciudadano) ;

  }

  async findAll(): Promise<Ciudadano[]> {
    return this.ciudadanoRepository.find() ;
  }

  async findOne(id: string): Promise<Ciudadano> {
    return this.ciudadanoRepository.findOne({ where: { id: id}});
  }

  async update(id: string, updateCiudadanoInput: UpdateCiudadanoInput): Promise<Ciudadano> {
    const ciudadano= await this.ciudadanoRepository.preload(updateCiudadanoInput);
    if (!ciudadano) {
      throw new Error(`Ciudadano con id ${id} no encontrado`);
    }
    return this.ciudadanoRepository.save(ciudadano);
    
  }

  async remove(id: string): Promise<Ciudadano> {
    const ciudadano= await this.ciudadanoRepository.findOneBy({id});
    if (!ciudadano) {
      throw new Error(`Ciudadano con id ${id} no encontrado`);
    }
    await this.ciudadanoRepository.remove(ciudadano);
    return ciudadano;
  }
}
