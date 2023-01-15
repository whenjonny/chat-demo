import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../models/user.model";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel) {}

  async find(query) {
    const users = await this.userModel.find({});
    console.log(users);
    return users;
  }

  create(user: User) {
    return this.userModel.create(user);
  }

}
