import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RespuestasService } from './respuestas.service';
import { Respuesta } from './entities/respuesta.entity';
import { CreateRespuestaInput } from './dto/create-respuesta.input';
import { UpdateRespuestaInput } from './dto/update-respuesta.input';

@Resolver(() => Respuesta)
export class RespuestasResolver {
  constructor(private readonly respuestasService: RespuestasService) {}

  @Mutation(() => Respuesta)
  createRespuesta(@Args('createRespuestaInput') createRespuestaInput: CreateRespuestaInput) {
    return this.respuestasService.create(createRespuestaInput);
  }

  @Query(() => [Respuesta], { name: 'respuestas' })
  findAll() {
    return this.respuestasService.findAll();
  }

  @Query(() => Respuesta, { name: 'respuesta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.respuestasService.findOne(id);
  }

  @Mutation(() => Respuesta)
  updateRespuesta(@Args('updateRespuestaInput') updateRespuestaInput: UpdateRespuestaInput) {
    return this.respuestasService.update(updateRespuestaInput.id, updateRespuestaInput);
  }

  @Mutation(() => Respuesta)
  removeRespuesta(@Args('id', { type: () => Int }) id: number) {
    return this.respuestasService.remove(id);
  }
}
