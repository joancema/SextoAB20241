import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  
    // const ciudadanoCreated= await  prisma.ciudadanoa.create({
    //     data:{
    //         nombre: 'John Cevallos',
    //         cedula: '123123123123',
    //     }
    // })
    // console.log(ciudadanoCreated)

    // const result= await  prisma.ciudadanoa.findMany();
    // console.log(result)

    // const preguntaCreated =  await prisma.preguntaa.create({
    //     data:{
    //         texto: '¿Cual es tu color favorito?',
    //     }
    // })
    // console.log(preguntaCreated)

    const result= await  prisma.preguntaa.findFirst({ where: { id: 1 }} )
    const result2 = await prisma.respuestaa.update({
        where: { id: 1 },
        data: { 
            respuesta: false,
        },
    })






}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })