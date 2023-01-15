import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class EventsGateway {
  @WebSocketServer() server: Server;

  onlineUsers = new Map();

  handleConnection(client: Socket) {
    this.server.on('connection', () => {
      console.log('Connected!');
    });
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('send-msg')
  sendMessage(client: any, payload: any) {
    const sendUserSocket = this.onlineUsers.get(payload.to);
    if(sendUserSocket) {
      this.server.emit('msg-received', payload.message);
    }
  }
}
