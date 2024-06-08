import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: 'clientes' })
export class Cliente {
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

