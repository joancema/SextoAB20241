import { Respuesta } from "src/respuesta/entities/respuesta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'preguntas' })
export class Pregunta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    texto: string;

    @OneToMany(
        () => Respuesta,
        ( respuesta ) => respuesta.pregunta,
        { cascade:true }
    )
    respuestas?: Respuesta[]
}


