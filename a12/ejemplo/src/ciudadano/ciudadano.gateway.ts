import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { CiudadanoService } from './ciudadano.service';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';

@WebSocketGateway()
export class CiudadanoGateway {
  constructor(private readonly ciudadanoService: CiudadanoService) {}

  @SubscribeMessage('createCiudadano')
  create(@MessageBody() createCiudadanoDto: CreateCiudadanoDto) {
    return this.ciudadanoService.create(createCiudadanoDto);
  }

  @SubscribeMessage('findAllCiudadano')
  findAll() {
    return this.ciudadanoService.findAll();
  }

  @SubscribeMessage('findOneCiudadano')
  findOne(@MessageBody() id: number) {
    return this.ciudadanoService.findOne(id);
  }

  @SubscribeMessage('updateCiudadano')
  update(@MessageBody() updateCiudadanoDto: UpdateCiudadanoDto) {
    return this.ciudadanoService.update(updateCiudadanoDto.id, updateCiudadanoDto);
  }

  @SubscribeMessage('removeCiudadano')
  remove(@MessageBody() id: number) {
    return this.ciudadanoService.remove(id);
  }
}
