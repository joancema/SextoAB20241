import {Router} from 'express'
import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()

const router = Router()


// login
router.post('/login', async (req, res) => {
    const {correo} = req.body
    const usuario = await prisma.usuario.findFirst({
        where: {
            correo,
        }
    })
    res.json(usuario)
})
// register
router.post('/register', async (req, res) => {
    const {nombre, correo} = req.body
    const usuario = await prisma.usuario.create({
        data: {
            nombre,
            correo
        }
    })
    res.json(usuario)
})


export default router