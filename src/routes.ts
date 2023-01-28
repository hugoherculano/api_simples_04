import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
    
    const user = createUser( {name: '', email: '', password: ''} );

    return res.status(200).json({ user })
}