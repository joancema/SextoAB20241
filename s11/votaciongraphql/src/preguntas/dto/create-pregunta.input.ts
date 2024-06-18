import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePreguntaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
