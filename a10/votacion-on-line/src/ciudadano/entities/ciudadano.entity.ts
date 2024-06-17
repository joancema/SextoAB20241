import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ciudadano')
export class Ciudadano {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text', {unique:true})
    cedula:string;
    @Column('text',  {unique:false})
    nombre:string;
}
