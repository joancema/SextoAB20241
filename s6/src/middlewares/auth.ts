import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export class AuthMiddleware {


  static async validateJWT( req: Request, res: Response, next: NextFunction ) {

    const authorization = req.header('Authorization');
    if( !authorization ) return res.status(401).json({ error: 'No token provided' });
    if ( !authorization.startsWith('Bearer ') ) return res.status(401).json({ error: 'Invalid Bearer token' });

    const token = authorization.split(' ').at(1) || '';

    try {

      const payload = await JwtAdapter.validateToken<{ id: string }>(token);
      if ( !payload ) return res.status(401).json({ error: 'Invalid token' })
      
      const user = await prisma.usuario.findFirst( {where:{id: Number(payload.id) }} );
      if ( !user ) return res.status(401).json({ error: 'Invalid token - user' });

      req.body.user = user;

      next();

    } catch (error) {
      
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });

    }
    
  }
}