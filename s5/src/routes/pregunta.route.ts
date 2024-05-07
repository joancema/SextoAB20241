import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()


router.get('/', (req, res) => {
    prisma.pregunta.findMany()
    .then(preguntas => res.json(preguntas))
    .catch(err => res.json(err))
})
router.post('/', async (req, res) => {
    const { texto } = req.body
    const preguntaCreated= await prisma.pregunta.create({
        data: {
            texto
            }
        })
    res.json(preguntaCreated)
})

export default router;