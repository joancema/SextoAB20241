import { Respuesta } from "src/respuesta/entities/respuesta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ciudadanos' })
export class Ciudadano {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: false,
    })
    cedula: string;

    @Column('text', {
        unique: false,
    })
    nombre: string;

    @OneToMany(
        () => Respuesta,
        ( respuesta ) => respuesta.ciudadano,
        { cascade:true }
    )
    respuestas?: Respuesta[]
}

