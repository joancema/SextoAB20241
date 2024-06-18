import { CreateRespuestaInput } from './create-respuesta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRespuestaInput extends PartialType(CreateRespuestaInput) {
  @Field(() => Int)
  id: number;
}
