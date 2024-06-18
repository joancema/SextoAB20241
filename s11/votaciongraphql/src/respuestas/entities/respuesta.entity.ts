import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Respuesta {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
