import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCiudadanoInput {
  
  @Field(()=>String )
  @IsString()
  @IsNotEmpty()
  cedula:string;
  
  @Field(()=>String, { nullable:true })
  @IsString()
  nombre:string;

}
