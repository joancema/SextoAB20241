import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()


router.get('/', async (req, res) => {
    const respuestas= await prisma.respuesta.findMany({
        include: {
            pregunta: true,
            ciudadano: true
        }
    })
    res.json(respuestas)
})

router.post('/', async (req, res) => {
    const { respuesta, preguntaId, ciudadanoId } = req.body
    const respuestaCreated= await prisma.respuesta.create({
        data: {
            respuesta,
            preguntaId,
            ciudadanoId
            }
        })
    res.json(respuestaCreated)
})

export default router;