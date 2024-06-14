import {  IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
export class CreatePreguntaDto {
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    texto: string;

}



