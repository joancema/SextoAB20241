import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const port = 3000
app.use(express.json())
const prisma = new PrismaClient()

app.get('/ciudadano', async (req, res) => {
  const ciudadanos = await prisma.ciudadano.findMany()
  res.json(ciudadanos)
})

app.get('/ciudadano/:id',async (req,res)=>{
  const {id} = req.params;
  const ciudadano = await prisma.ciudadano.findFirst({
    where:{
      id:parseInt(id)
    }
  })
})

app.post('/ciudadano', async (req, res) => {
  const { cedula, nombre } = req.body
  const ciudadano = await prisma.ciudadano.create({
    data: {
      cedula,
      nombre,
    }
  })
  res.json(ciudadano)
})

app.put('/ciudadano')

app.put('/ciudadano/:id', async(req,res)=>{
  const {id} = req.params
  const { cedula, nombre  } = req.body;
  const ciudadanoUpdated = await  prisma.ciudadano.update({
    where:{
      id: parseInt(id) 
    }
    , data:{
      cedula,
      nombre
    }
  })
  console.log(ciudadanoUpdated)
  res.json(ciudadanoUpdated)
  
})
app.delete('/ciudadano/:id',async(req,res)=>{
  const { id } = req.params;
  const ciudadanoDeleted = prisma.ciudadano.delete({
    where:{
      id:parseInt(id)
    }
  })
  res.json(ciudadanoDeleted)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


