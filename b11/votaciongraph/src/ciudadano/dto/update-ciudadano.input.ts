import { IsUUID } from 'class-validator';
import { CreateCiudadanoInput } from './create-ciudadano.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCiudadanoInput extends PartialType(CreateCiudadanoInput) {

  @Field(() => String)
  @IsUUID()
  id: string;
}
