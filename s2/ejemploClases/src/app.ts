// import { PrismaClient } from '@prisma/client'
import { ciudadano, pregunta,respuesta  } from './mongo/models'
import { MongoDatabase } from './mongo'

// const prisma = new PrismaClient()

// async function main() {
    // const crearCiudadano=await prisma.ciudadano.create({
    //     data:{
    //         nombre:"Juan",
    //    }});
//     const updateCiudadano=await prisma.ciudadano.update({
//         where: { nombre: 'Cambio'},
//         data: { nombre: 'Cambio 2' },
      
//     })
//     console.log(updateCiudadano);
//   const todosLosCiudadanos=await prisma.ciudadano.findMany();
//     console.log(todosLosCiudadanos);
// const pregunta = await prisma.pregunta.create({
//     data:{
//         texto:"¿Cuál es tu color favorito?"
//     }
// })
//     console.log(pregunta);
    // const respuesta = await prisma.respuesta.create({
    //     data:{
    //       ciudadano:{
    //         create:{
    //           nombre:"Segundo Ciudadano"
    //         }
    //       },
    //       pregunta:{
    //         connect:{
    //           id:1
    //         }
    //       },
    //       respuesta: true
    //     }
    //     })
    // console.log(respuesta);
// }

async function main(){
  MongoDatabase.connect({
    mongoUrl: 'mongodb+srv://joancema:jacm1310@cluster0.r8rrsvn.mongodb.net/test',
    dbName: 'encuestas'
  });
  // const preguntax=await pregunta.findOne({texto: "¿Cuál es tu color favorito?"})
  // console.log(preguntax);
  // const ciudadanox= await ciudadano.findOne({nombre: "Juan"})
  // console.log(ciudadanox);
  // const respuestax = await respuesta.create({
  //   ciudadano: ciudadanox,
  //   pregunta: preguntax,
  //   respuesta: true
  // })

  // const respuestas =  await respuesta.find({}).populate('ciudadano').populate('pregunta');
  // console.log(respuestas);
  const respuestax = await respuesta.findById("662c27438628d16927c18e2d").populate('ciudadano').populate('pregunta');
  console.log(respuestax)
  // const updated = await  respuestax?.updateOne({respuesta: false})
  // console.log(updated);


}

main().then(()=>{
  console.log("Finalizado");
})

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e.message)
//     await prisma.$disconnect()
//     process.exit(1)
//   })