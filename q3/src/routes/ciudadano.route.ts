import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

// get all ciudadanos
router.get('/', (req: Request, res: Response) => {
    prisma.ciudadano.findMany()
        .then(ciudadanos => res.json(ciudadanos))
        .catch(err => res.status(500).json({ error: err.message }));
});
// 
// localhost:3000/api.v1/ciudadano/1
router.get('/:id',(req:Request, res:Response )=>{
    const { id } = req.params;
    prisma.ciudadano.findUnique({
        where:{id: parseInt(id)}
    })
    .then(ciudadano => res.json(ciudadano))
    .catch((err)=> res.status(500).json({ error: err.message }) )

})
//post
router.post('/', (req:Request, res:Response)=>{
    const { identificacion, nombre } = req.body
    prisma.ciudadano.create(
        {data:{
                identificacion:identificacion,
                nombre
        }})
        .then(ciudadano => res.json(ciudadano))
        .catch((err)=> res.status(500).json({ error: err.message }) )
})
router.put('/:id', (req:Request, res:Response)=>{
    const { id } = req.params;
    const { identificacion, nombre } = req.body
    prisma.ciudadano.update(
        {
            where:{id: parseInt(id)},
            data:{
                identificacion,
                nombre
        }})
        .then(ciudadano => res.json(ciudadano))
        .catch((err)=> res.status(500).json({ error: err.message }) )
})
router.delete('/:id',(req:Request,res:Response)=>{
    const { id} = req.params
    prisma.ciudadano.delete({
        where:{id: parseInt(id)}
    })
    .then(ciudadano => res.json(ciudadano))
    .catch((err)=> res.status(500).json({ error: err.message }) )

})


export default router;
