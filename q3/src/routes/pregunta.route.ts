import {Router, Request, Response} from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

// get all preguntas
router.get('/', (req: Request, res: Response) => {
    prisma.pregunta.findMany()
        .then(preguntas => res.json(preguntas))
        .catch(err => res.status(500).json({ error: err.message }));
});
//post
router.post('/', (req:Request, res:Response)=>{
    const {  texto } = req.body
    prisma.pregunta.create(
        {data:{
                texto
        }})
        .then(pregunta => res.json(pregunta))
        .catch((err)=> res.status(500).json({ error: err.message }) )
})
// put
router.put('/:id', (req:Request, res:Response)=>{
    const { id } = req.params;
    const { texto } = req.body
    prisma.pregunta.update(
        {
            where:{id: parseInt(id)},
            data:{
                texto
        }})
        .then(pregunta => res.json(pregunta))
        .catch((err)=> res.status(500).json({ error: err.message }) )
})
//delete
router.delete('/:id', (req:Request, res:Response)=>{
    const { id } = req.params;
    prisma.pregunta.delete(
        {where:{id: parseInt(id)}})
        .then(pregunta => res.json(pregunta))
        .catch((err)=> res.status(500).json({ error: err.message }) )
})


export default router;