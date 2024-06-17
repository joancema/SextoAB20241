import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateCiudadanoDto {

    @IsString()
    @IsOptional()
    id?:string

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    cedula: string;

    @IsString()
    @MinLength(3)
    nombre: string;
}
