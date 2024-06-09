<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## ir a la página de nest y proceder con instalación y crear proyecto
## nest g resource
## Habilitar cors y agregar prefijo
en main.ts ```app.enableCors();
app.setGlobalPrefix('api');```
## buscar sobre typeorm nest
## npm install --save @nestjs/typeorm typeorm pg
## agregar en imports sobre 
en app.modules.ts ```
TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'MysecretPassword',
      database: 'clases',
      autoLoadEntities: true,
      synchronize: true,
    }),```
## editar entity
ciudadano.entity.ts ```import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ciudadanos' })
export class Ciudadano {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: false,
    })
    cedula: string;

    @Column('text', {
        unique: false,
    })
    nombre: string;
}```
## Instalar npm i --save class-validator class-transformer
## Habilitar validaciones en main.ts
```
app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
```
## Definir los dto
create-ciudadano.dto.ts ```
import {  IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateCiudadanoDto {
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    cedula: string;


    @IsString()
    @MinLength(1)
    nombre: string;

}```
## Agregar constructor en ciudadanos.service.ts
```
constructor(
    @InjectRepository(Ciudadano)
    private readonly ciudadanoRepository: Repository<Ciudadano>
  ) {
    
  }
```
## agregar en ciudadanos.module.ts
```
imports: [
    TypeOrmModule.forFeature([ Ciudadano ]),
  ],
  exports: [TypeOrmModule],
```
## ahora reemplazar el código
en ciudadanos.service.ts ```
  async create(createCiudadanoDto: CreateCiudadanoDto) {
    const ciudadano = this.ciudadanoRepository.create(createCiudadanoDto);
    return this.ciudadanoRepository.save(ciudadano);
  }
  async findAll() {
    return await this.ciudadanoRepository.find();
  }
  async findOne(id: string) {
    return await this.ciudadanoRepository.findOneBy({id});
  }
  async update(id: string, updateCiudadanoDto: UpdateCiudadanoDto) {
    const updated= await this.ciudadanoRepository.update(id, updateCiudadanoDto);
    return await this.findOne(id) 
  }
  async remove(id: string) {
    const deleted = await this.ciudadanoRepository.delete(id);
    return deleted;
  }```
## en ciudadanos.controller.ts debemos tener que quitar el + en los id 
## para que no los convierta en número
## ls -la para ver los archivos ocultos
## rm -r .git

