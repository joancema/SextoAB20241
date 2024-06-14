import { Injectable } from '@nestjs/common';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Respuesta } from './entities/respuesta.entity';

@Injectable()
export class RespuestaService {
  constructor(
    @InjectRepository(Respuesta)
    private readonly respuestaRepository: Repository<Respuesta>
  ) {
    
  }
  async create(createRespuestaDto: CreateRespuestaDto) {
    const respuesta = this.respuestaRepository.create(
      {...createRespuestaDto,
        ciudadano: {id: createRespuestaDto.ciudadanoId},
        pregunta: {id: createRespuestaDto.preguntaId}
      });
    await  this.respuestaRepository.save(respuesta);
    return respuesta;
  }

  async findAll() {
    return await this.respuestaRepository.find();
  }

  async findOne(id: string) {
    return await this.respuestaRepository.findOneBy({id});
  }

  async update(id: string, updateRespuestaDto: UpdateRespuestaDto) {
    const updated= await this.respuestaRepository.update(id, updateRespuestaDto);
    if (updated.affected > 0) {
      return await this.findOne(id);
    }
  }

  async remove(id: number) {
    const deleted = await this.respuestaRepository.delete(id);
    return deleted;
  }
}
