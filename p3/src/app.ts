import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())


app.get('/ciudadanos', async (req, res) => {
  const users = await prisma.ciudadano.findMany()
  res.json(users)
})

app.get('/ciudadanos/:id', async (req, res) => {
  const { id } = req.params
  const user = await prisma.ciudadano.findUnique({
    where: {
      id: parseInt(id),
    },
  })
  res.json(user)
})

app.post('/ciudadanos', async (req, res) => {
  const { cedula,nombre } = req.body
  const ciudadano = await prisma.ciudadano.create({
    data: {
      cedula,
      nombre,
    },
  })
  res.json(ciudadano)
})

app.put('/ciudadanos/:id', async (req:Request, res:Response) => {
  const { id } = req.params
  const { cedula,nombre } = req.body
  const ciudadano = await prisma.ciudadano.update({
    where: {
      id: parseInt(id),
    },
    data: {
      cedula,
      nombre,
    },
  })
  res.json(ciudadano)
})

app.delete('/ciudadanos/:id', async (req, res) => {
  const { id } = req.params
  const ciudadano = await prisma.ciudadano.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.json(ciudadano)
})

app.listen(3000, () =>
  console.log('🚀 Server ready at: http://localhost:3000'),
)
