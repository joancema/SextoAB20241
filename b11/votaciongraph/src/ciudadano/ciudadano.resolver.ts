import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CiudadanoService } from './ciudadano.service';
import { Ciudadano } from './entities/ciudadano.entity';
import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';

@Resolver(() => Ciudadano)
export class CiudadanoResolver {
  constructor(private readonly ciudadanoService: CiudadanoService) {}

  @Mutation(() => Ciudadano)
  createCiudadano(@Args('createCiudadanoInput') createCiudadanoInput: CreateCiudadanoInput)
  : Promise<Ciudadano> {
    return this.ciudadanoService.create(createCiudadanoInput);
  }

  @Query(() => [Ciudadano], { name: 'ciudadanos' })
  findAll(): Promise<Ciudadano[]> {
    return this.ciudadanoService.findAll();
  }

  @Query(() => Ciudadano, { name: 'ciudadano' })
  findOne(@Args('id', { type: () => ID }) id: string): Promise<Ciudadano> {
    return this.ciudadanoService.findOne(id);
  }

  @Mutation(() => Ciudadano)
  updateCiudadano(@Args('updateCiudadanoInput') updateCiudadanoInput: UpdateCiudadanoInput)
  : Promise<Ciudadano>{
    return this.ciudadanoService.update(updateCiudadanoInput.id, updateCiudadanoInput);
  }

  @Mutation(() => Ciudadano)
  removeCiudadano(@Args('id', { type: () => String }) id: string): Promise<Ciudadano>{
    return this.ciudadanoService.remove(id);
  }
}
