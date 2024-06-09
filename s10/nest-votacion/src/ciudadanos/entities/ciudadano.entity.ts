import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

