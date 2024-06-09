import {  IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateCiudadanoDto {
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    cedula: string;


    @IsString()
    @MinLength(1)
    nombre: string;

}


