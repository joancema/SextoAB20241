import { Test, TestingModule } from '@nestjs/testing';
import { PreguntasResolver } from './preguntas.resolver';
import { PreguntasService } from './preguntas.service';

describe('PreguntasResolver', () => {
  let resolver: PreguntasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreguntasResolver, PreguntasService],
    }).compile();

    resolver = module.get<PreguntasResolver>(PreguntasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
