import { PrismaClient } from '@prisma/client'
import express, { Response} from 'express'

// ejemplo de tipado de request y response


const prisma = new PrismaClient()
const app = express()
app.use(express.json())

// create route ciudadano web service with express and prisma 
app.get('/ciudadano', async (req, res) => {
  const ciudadanos = await prisma.ciudadano.findMany()
  res.json(ciudadanos)
})
app.get('/ciudadano/:id', async (req:TypedRequestParams<{id:string}>, res:Response) => {
  const { id } = req.params
  console.log(id)
  const ciudadano = await prisma.ciudadano.findUnique({
    where: { id: Number(id) },
  })
  res.json(ciudadano)
})
// post 
app.post('/ciudadano', async (req:TypedRequestBody<ICiudadano>, res:Response) => {
  const {  identificacion, nombre } = req.body
  const ciudadano = await prisma.ciudadano.create({
    data: {
      identificacion,
      nombre,
    },
  })
  res.json(ciudadano)
})
//update
app.put('/ciudadano/:id', async (req:TypedRequest<{id:string},ICiudadano>, res:Response) => {
  const { id } = req.params
  const { identificacion, nombre } = req.body
  const ciudadano = await prisma.ciudadano.update({
    where: { id: Number(id) },
    data: { identificacion, nombre },
  })
  res.json(ciudadano)
})

app.listen(3000, () =>
  console.log('🚀 Server ready at: http://localhost:3000'),
)

interface ICiudadano {
    id: number
    identificacion: string
    nombre: string
}

export interface TypedRequestParams<T> extends Express.Request {
    params: T
}
export interface TypedRequest<T, U> extends Express.Request {
    body: U,
    params: T
}
export interface TypedRequestBody<T> extends Express.Request {
    body: T
}