import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()


router.get('/', (req, res) => {
    prisma.ciudadano.findMany()
    .then(ciudadanos => res.json(ciudadanos))
    .catch(err => res.json(err))
})
router.get('/:id',(req,res)=>{
    const {id} = req.params
    prisma.ciudadano.findUnique({
        where:{
            id:Number(id)
        }
    }).then(ciudadano => res.json(ciudadano))
    .catch(err => res.json(err))
})

export default router;