import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()


router.get('/', (req, res) => {
    prisma.pregunta.findMany()
    .then(preguntas => res.json(preguntas))
    .catch(err => res.json(err))
})

export default router;