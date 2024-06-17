import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity("ciudadano")
export class Ciudadano {

  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column("text", { unique:true } )
  @Field(()=> String)
  cedula:string;

  @Column("text", { nullable: true })
  @Field(()=> String)
  nombre:string;

}
