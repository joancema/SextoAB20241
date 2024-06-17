import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('ciudadano')
export class Ciudadano {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(()=>ID )
  id:string;

  @Column()
  @Field(()=>String )
  cedula:string;

  @Column('text', { nullable:true } )
  @Field(()=>String )
  nombre:string;

}
