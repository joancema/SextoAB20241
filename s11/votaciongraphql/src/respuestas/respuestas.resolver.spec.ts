import { Test, TestingModule } from '@nestjs/testing';
import { RespuestasResolver } from './respuestas.resolver';
import { RespuestasService } from './respuestas.service';

describe('RespuestasResolver', () => {
  let resolver: RespuestasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RespuestasResolver, RespuestasService],
    }).compile();

    resolver = module.get<RespuestasResolver>(RespuestasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
