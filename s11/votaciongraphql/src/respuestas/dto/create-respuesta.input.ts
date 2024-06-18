import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRespuestaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
