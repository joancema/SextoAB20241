import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pregunta {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
