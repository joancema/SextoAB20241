import { Injectable } from '@nestjs/common';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pregunta } from './entities/pregunta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PreguntaService {
  constructor(
    @InjectRepository(Pregunta)
    private readonly preguntaRepository: Repository<Pregunta>
  ) {
    
  }
  create(createPreguntaDto: CreatePreguntaDto) {
    const pregunta = this.preguntaRepository.create(createPreguntaDto);
    return this.preguntaRepository.save(pregunta);
  }

  async findAll() {
    return await this.preguntaRepository.find();
  }

  async findOne(id: string) {
    return await this.preguntaRepository.findOneBy({id});
  }

  async update(id: string, updatePreguntaDto: UpdatePreguntaDto) {
    const updated= await this.preguntaRepository.update(id, updatePreguntaDto);
    if (updated.affected > 0) {
      return await this.findOne(id);
    }
  }

  async remove(id: number) {
    const deleted = await this.preguntaRepository.delete(id);
    return deleted;
  }
}
