import { CreatePreguntaInput } from './create-pregunta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePreguntaInput extends PartialType(CreatePreguntaInput) {
  @Field(() => Int)
  id: number;
}
