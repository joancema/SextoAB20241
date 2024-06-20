import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity("ciudadano")
export class Ciudadano {

  @PrimaryGeneratedColumn("uuid")
  @Field(()=> ID)
  id:string;

  @Column("text", { unique:true } )
  @Field(()=> String)
  cedula:string;

  @Column("text", { nullable: true })
  @Field(()=> String)
  nombre:string;

}
