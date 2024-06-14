import { Ciudadano } from "src/ciudadanos/entities/ciudadano.entity";
import { Pregunta } from "src/pregunta/entities/pregunta.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'respuestas' })
export class Respuesta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    
    @Column('boolean', {
        unique: false,
        default: true
    })
    respuesta: boolean;

    @ManyToOne(
        () => Pregunta,
        ( pregunta ) => pregunta.respuestas,
        { eager: true }
    )
    pregunta?: Pregunta

    @ManyToOne(
        () => Ciudadano,
        ( ciudadano ) => ciudadano.respuestas,
        { eager: true }
    )
    ciudadano?: Ciudadano

    
}



