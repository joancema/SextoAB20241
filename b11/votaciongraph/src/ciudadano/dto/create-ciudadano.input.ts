import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCiudadanoInput {

  @Field(()=> String)
  @IsString()
  @IsNotEmpty()
  cedula:string;

  @IsString()
  @Field(()=> String, { nullable: true})
  nombre:string;


}
