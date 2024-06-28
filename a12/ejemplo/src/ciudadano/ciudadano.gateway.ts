import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { CiudadanoService } from './ciudadano.service';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class CiudadanoGateway implements OnGatewayConnection, OnGatewayDisconnect {


  @WebSocketServer()
  wss: Server;

  constructor(private readonly ciudadanoService: CiudadanoService) {}
  handleConnection(client: any, ...args: any[]) {

    const token =  client.handshake.headers.authentication as string;
    //validarToken(token);
    console.log(`Token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createCiudadano')
  create(@MessageBody() createCiudadanoDto: CreateCiudadanoDto) {

    const inserted =  this.ciudadanoService.create(createCiudadanoDto);
    this.wss.emit('newCiudadano', this.findAll() );
    return inserted;
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
