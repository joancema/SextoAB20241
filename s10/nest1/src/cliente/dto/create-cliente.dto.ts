import {  IsNotEmpty, IsOptional, IsString, MinLength, isNotEmpty } from "class-validator";

export class CreateClienteDto {
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

