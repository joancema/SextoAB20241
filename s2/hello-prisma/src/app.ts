import { PrismaClient } from '@prisma/client'
import  { CiudadanoModel, MongoDatabase,PreguntaModel,RespuestaModel } from './mongo'
import { env } from 'process'

const prisma = new PrismaClient()

async function create() {
  const respuesta= await prisma.respuestaModel.create({
    data: {
      pregunta: {
        connect: {
            id:1          
        }
      },
      ciudadano: {
        connect: {
          nombre: 'Juan 2'
        }
      }
    }
  })

  // const respuesta = await prisma.respuestaModel.create({
  //   data: {
  //     pregunta: {
  //       create: {
  //         texto: 'Pregunta 1'
  //       }
  //     },
  //     ciudadano: {
  //       create: {
  //         nombre: 'Juan x',
  //         direccion: 'Calle 123',
  //         telefono: '123456789'
  //       }
  //     }
  //   }
  // })

  
  // const ciudadanoInserted =await  prisma.ciudadanoModel.create({
  //   data: {
  //     nombre: 'Juan 2',
  //     direccion:'Calle 123',
  //     telefono: '123456789'
  //   }
  // })
  //   console.log(ciudadanoInserted.id)
  // const preguntaInserted = await prisma.preguntaModel.create({
  //   data: {
  //     texto: 'Pregunta 1',
  //   }
  // })
  // console.log(preguntaInserted.id)
  // const respuestaInserted = await prisma.respuestaModel.create({
  //   data: {
  //     preguntaId: preguntaInserted.id,
  //     ciudadanoId: ciudadanoInserted.id
  //   }
  // })
  // console.log(respuestaInserted.id)
}
async function query() {
  // const allUsers = await prisma.ciudadanoModel.findMany()
  const preguntasPorCiudadano = await prisma.ciudadanoModel.findUnique({
    where: {
      nombre: 'Juan 2'
    },
    include: {
      respuestas: {
        include: {
          pregunta: true,
          ciudadano: true
        }
      }
    }
  })
  // console.log(allUsers)
  preguntasPorCiudadano?.respuestas.forEach(respuesta => {
    console.log(respuesta.ciudadano.nombre)
    console.log(respuesta.pregunta.texto)
  })
}
async function createMongo(){
  // const respuesta = new RespuestaModel();
  // respuesta.respuesta = true;
  // const ciudadano = await CiudadanoModel.findOne({nombre:'Juan 2'})
  // const pregunta = await PreguntaModel.findOne({texto:'Pregunta 1'})
  // respuesta.ciudadano = ciudadano?.id;
  // respuesta.pregunta = pregunta?.id;
  // await respuesta.save();
  
  const ciudadano = new CiudadanoModel();
  ciudadano.nombre = 'Juan P';
  ciudadano.direccion = 'Calle 123';
  ciudadano.telefono = '123456789';
  const resciudadano=await ciudadano.save();

  const pregunta = new PreguntaModel();
  pregunta.texto = 'Pregunta 1';
  const respregunta= await pregunta.save();

  const respuesta = new RespuestaModel();
  respuesta.respuesta = true;
  respuesta.ciudadano = resciudadano.id;
  respuesta.pregunta = respregunta.id;
  await respuesta.save();
}
async function queryMongo(){
  const ciudadanos = await CiudadanoModel.find();
  console.log(ciudadanos);

  // const ciudadano = await CiudadanoModel.findOne({nombre:'Juan P'});
  // console.log(ciudadano);

  // const respuestas = await RespuestaModel.find().populate('ciudadano').populate('pregunta');
  // console.log(respuestas);
}

/// el main
(async ()=>{
    try{
      await MongoDatabase.connect({
        mongoUrl:env.MONGO_URL || 'mongodb://localhost:27017' ,
        dbName: env.MONGO_NAME||'ejemplo',
      });
        // await create();
        // await query();
        // await createMongo();
        await queryMongo();
        console.log(`almacenado exitosamente!`)
    }
    catch(e: any){
        // console.error(e);
        console.log(`Error al almacenar!`, e.message)
    }
    finally{
        await prisma.$disconnect();
    }
})()