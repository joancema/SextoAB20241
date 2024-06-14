import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateRespuestaDto {
    @IsBoolean()
    respuesta: boolean;

    @IsString()
    // @IsOptional()
    preguntaId?: string;

    @IsString()
    // @IsOptional()
    ciudadanoId?: string;


}
