import { Injectable } from '@nestjs/common';
import { CreateRespuestaInput } from './dto/create-respuesta.input';
import { UpdateRespuestaInput } from './dto/update-respuesta.input';

@Injectable()
export class RespuestasService {
  create(createRespuestaInput: CreateRespuestaInput) {
    return 'This action adds a new respuesta';
  }

  findAll() {
    return `This action returns all respuestas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} respuesta`;
  }

  update(id: number, updateRespuestaInput: UpdateRespuestaInput) {
    return `This action updates a #${id} respuesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} respuesta`;
  }
}
