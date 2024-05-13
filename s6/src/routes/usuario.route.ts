import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { JwtAdapter, bcryptAdapter } from '../config'

const router = Router();

// Prisma Client instance
const prisma = new PrismaClient();

// login 
router.post('/login', async (req: Request, res: Response) => {
  const { correo, clave } = req.body;
  const user = await prisma.usuario.findFirst({
    where: {
      correo,
    }
  });
  const isPasswordMatch = bcryptAdapter.compare( clave, user?.clave! )
  const token = await JwtAdapter.generateToken({ id: user!.id , email: user!.correo });
  if (isPasswordMatch) {
    res.json(
      {
        user,
        token
      }
    );
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
// register
router.post('/register', async (req: Request, res: Response) => {
  const { nombre, correo, clave } = req.body;
  const clavex= bcryptAdapter.hash( clave )
  const user = await prisma.usuario.create({
    data: {
      nombre,
      correo,
      clave: clavex
    }
  });
  res.json(user);
});


export default router;
