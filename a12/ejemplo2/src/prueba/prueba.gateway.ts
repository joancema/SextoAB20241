import { WebSocketGateway } from '@nestjs/websockets';
import { PruebaService } from './prueba.service';

@WebSocketGateway()
export class PruebaGateway {
  constructor(private readonly pruebaService: PruebaService) {}
}
