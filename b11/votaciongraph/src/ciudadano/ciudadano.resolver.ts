import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CiudadanoService } from './ciudadano.service';
import { Ciudadano } from './entities/ciudadano.entity';
import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';

@Resolver(() => Ciudadano)
export class CiudadanoResolver {
  constructor(private readonly ciudadanoService: CiudadanoService) {}

  @Mutation(() => Ciudadano)
  createCiudadano(@Args('createCiudadanoInput') createCiudadanoInput: CreateCiudadanoInput) {
    return this.ciudadanoService.create(createCiudadanoInput);
  }

  @Query(() => [Ciudadano], { name: 'ciudadano' })
  findAll() {
    return this.ciudadanoService.findAll();
  }

  @Query(() => Ciudadano, { name: 'ciudadano' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ciudadanoService.findOne(id);
  }

  @Mutation(() => Ciudadano)
  updateCiudadano(@Args('updateCiudadanoInput') updateCiudadanoInput: UpdateCiudadanoInput) {
    return this.ciudadanoService.update(updateCiudadanoInput.id, updateCiudadanoInput);
  }

  @Mutation(() => Ciudadano)
  removeCiudadano(@Args('id', { type: () => Int }) id: number) {
    return this.ciudadanoService.remove(id);
  }
}
