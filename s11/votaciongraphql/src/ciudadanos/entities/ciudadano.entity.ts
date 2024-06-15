import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'ciudadanos'})
export class Ciudadano {

  @PrimaryGeneratedColumn('uuid')
  @Field(()=> ID)
  id:string;

  @Column()
  @Field( ()=>  String )
  cedula:string;

  @Column({nullable: true})
  @Field( () => String, {nullable: true} )
  nombre:string;
  
}
