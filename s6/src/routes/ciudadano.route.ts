import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();

// Prisma Client instance
const prisma = new PrismaClient();

// GET /ciudadano
router.get('/', (req: Request, res: Response) => {
    // Logic to fetch all ciudadanos from the database
    // and send the response
    prisma.ciudadano.findMany()
        .then(ciudadanos => res.json(ciudadanos))
        .catch(error => res.json({ error }));

});

// GET /ciudadano/:id
router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    // Logic to fetch a single ciudadano by ID from the database
    // and send the response
    prisma.ciudadano.findUnique({
        where: { id: parseInt(id) }
    })
        .then(ciudadano => res.json(ciudadano))
        .catch(error => res.json({ error }));
});

// POST /ciudadano
router.post('/', (req: Request, res: Response) => {
    // Logic to create a new ciudadano in the database
    // using the data from the request body
    // and send the response
    const { cedula, nombre } = req.body;
    prisma.ciudadano.create({
        data: {
            cedula,
            nombre,
        }
    })
        .then(ciudadano => res.json(ciudadano))
        .catch(error => res.json({ error }));
});

// PUT /ciudadano/:id
router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    // Logic to update a ciudadano by ID in the database
    // using the data from the request body
    // and send the response
    const { cedula, nombre } = req.body;
    prisma.ciudadano.update({
        where: { id: parseInt(id) },
        data: {
            cedula,
            nombre,
        }
    })
        .then(ciudadano => res.json(ciudadano))
        .catch(error => res.json({ error }));
});

// DELETE /ciudadano/:id
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    // Logic to delete a ciudadano by ID from the database
    // and send the response
    prisma.ciudadano.delete({
        where: { id: parseInt(id) }
    })
        .then(ciudadano => res.json(ciudadano))
        .catch(error => res.json({ error }));
});

export default router;