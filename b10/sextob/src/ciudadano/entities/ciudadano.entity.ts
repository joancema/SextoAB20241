import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'ciudadano'})
export class Ciudadano {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text',{unique:true})
    cedula:string;
    @Column('text',{unique:false})
    nombre:string
}
