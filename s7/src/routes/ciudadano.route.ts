import { Router } from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


const router = Router()

router.get('/', async (req, res) => {
  const ciudadanos = await prisma.ciudadano.findMany()
  res.json(ciudadanos)
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const ciudadano = await prisma.ciudadano.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    res.json(ciudadano)
})
router.post('/', async (req, res) => {
    const {  nombre } = req.body
    const ciudadano = await prisma.ciudadano.create({
        data: {
        nombre,
        }
    })
    res.json(ciudadano)
})

export default router




