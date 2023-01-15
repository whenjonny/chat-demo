import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./schemas/users.schema";
import {UserService} from "./services/users.service";
import {MessageService} from "./services/messages.service";
import {MessageSchema} from "./schemas/messages.schema";
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jonny:jonny@cluster0.bljtavj.mongodb.net',{dbName: 'chatapp1'}),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Message', schema: MessageSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, UserService, MessageService, EventsGateway],
})
export class AppModule {}
