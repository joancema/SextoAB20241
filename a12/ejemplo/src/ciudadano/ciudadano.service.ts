import { Injectable } from '@nestjs/common';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';


const ciudadanos = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    fechaNacimiento: '1996-01-01',
    direccion: 'Calle 1 # 2-3',
    telefono: '1234567890',
    email: 'prueba@gmail.com'
  },
  {
    id: 2,
    nombre: 'Maria',
    apellido: 'Gomez',
    edad: 30,
    fechaNacimiento: '1991-01-01',
    direccion: 'Calle 2 # 3-4',
    telefono: '0987654321',
    email: 'prueba2@gmail.com'
  }
]


@Injectable()
export class CiudadanoService {
  create(createCiudadanoDto: CreateCiudadanoDto) {
    ciudadanos.push(createCiudadanoDto);
    return createCiudadanoDto;
  }

  findAll() {
    return ciudadanos;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudadano`;
  }

  update(id: number, updateCiudadanoDto: UpdateCiudadanoDto) {
    return `This action updates a #${id} ciudadano`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudadano`;
  }
}
