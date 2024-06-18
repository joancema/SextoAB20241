import { Injectable } from '@nestjs/common';
import { CreatePreguntaInput } from './dto/create-pregunta.input';
import { UpdatePreguntaInput } from './dto/update-pregunta.input';

@Injectable()
export class PreguntasService {
  create(createPreguntaInput: CreatePreguntaInput) {
    return 'This action adds a new pregunta';
  }

  findAll() {
    return `This action returns all preguntas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pregunta`;
  }

  update(id: number, updatePreguntaInput: UpdatePreguntaInput) {
    return `This action updates a #${id} pregunta`;
  }

  remove(id: number) {
    return `This action removes a #${id} pregunta`;
  }
}
