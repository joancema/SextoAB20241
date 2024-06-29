import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface User {
    id: string;
    name: string;
    isActive: boolean    
}

interface ConnectedClients {
    [id: string]: {
        socket: Socket;
        user: User;
    }
}


const users: User[] = [
    {id: '1', name: 'user1', isActive: true},
    {id: '2', name: 'user2', isActive: false},
    {id: '3', name: 'user3', isActive: true},
];


@Injectable()
export class PruebaService {
    private connectedClients: ConnectedClients = {};

    registerClient(socket: Socket, userId: string) {
        const user = users.find(u => u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        if (!user.isActive){
            throw new Error('User is not active');
        }

        this.ckeckUserConnection(user);

        
        this.connectedClients[socket.id] = {
            socket:socket,
            user: user
        };
    }
    removeClient(clientId: string) {
        delete this.connectedClients[clientId];
    }
    getConnectedClients(): string[] {
        return Object.keys(this.connectedClients);
    }
    getUserFullName(socketId: string): string {
        return this.connectedClients[socketId].user.name
    }
    ckeckUserConnection(user: User) {
        for (const clientId of  Object.keys(this.connectedClients)) {
            const connectedClient = this.connectedClients[clientId];
            if (connectedClient.user.id === user.id) {
                // throw new Error('User is already connected');
                connectedClient.socket.disconnect();
                break;
            }
        }
    }
}
