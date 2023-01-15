import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../models/user.model";

@Injectable()
export class MessageService {
  constructor(@InjectModel('Message') private readonly messageModel) {}

  create(message) {
    return this.messageModel.create(message)
  }

  async find(query) {
    const messages = await this.messageModel.find(query).sort({ updatedAt: 1 });
    return messages;
  }

}
