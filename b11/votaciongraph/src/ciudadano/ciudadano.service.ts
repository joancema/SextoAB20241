import { Injectable } from '@nestjs/common';
import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';
import { Repository } from 'typeorm';
import { Ciudadano } from './entities/ciudadano.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CiudadanoService {
  constructor(
    @InjectRepository(Ciudadano)
    private readonly ciudadanoRepository: Repository<Ciudadano>,
  ) {}
  async create(createCiudadanoInput: CreateCiudadanoInput): Promise<Ciudadano> {
    const created = this.ciudadanoRepository.create(createCiudadanoInput);
    return await this.ciudadanoRepository.save(created);
  }

  async findAll(): Promise<Ciudadano[]> {
    return await  this.ciudadanoRepository.find();
  }

  async findOne(id: string): Promise<Ciudadano> {
    // return await this.ciudadanoRepository.findOneBy({id});
    return await this.ciudadanoRepository.findOne({where:{id}});
  }

  async update(id: string, updateCiudadanoInput: UpdateCiudadanoInput)
  : Promise<Ciudadano>{
    const updated = await this.ciudadanoRepository.preload(updateCiudadanoInput);
    if (!updated){
      throw new Error("Ciudadano not found");
    }
    return await this.ciudadanoRepository.save(updated);
  }

  async remove(id: string)
  : Promise<Ciudadano>{
    const removed = await this.findOne(id);
    if (!removed){
      throw new Error("Ciudadano not found");
    }
    await this.ciudadanoRepository.delete(id);
    return removed;
  }
}
