import {Body, Controller, Get, Post, Query, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {UserService} from './services/users.service';
import {MessageService} from './services/messages.service';
import {User} from "./models/user.model";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly userService: UserService,
      private readonly messageService: MessageService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users/list')
  async listUser(@Query('userId') userId) {
    try {
      const users = await this.userService.find({ });
      return JSON.stringify(users);
    } catch (err) {
      console.log(err);
      return '500'
    }
  }

  @Post('/users/create')
  createUser(): string {
    const userModel = new User;
    userModel.username = 'jonny' + new Date().getTime();
    userModel.password = '' + new Date().getTime();
    const user = this.userService.create(userModel);
    return user;
  }

  @Post('/users/login')
  loginUser(): string {
    return 'ok';
  }

  @Post('/messages/send')
  sendMessage(@Body() req): string {
    try {
      console.log(req);
      const {from,to,message} = req;
      const data = this.messageService.create({
        message:{
          text: message
        },
        users: [
          from,
          to
        ],
        sender:from,
      });

      if(data) return 'ok';
      return 'failed';
    } catch (err) {
      console.log(err);
      // TODO global catch
      return '500';
    }
    return 'ok';
  }

  @Get('/messages/list')
  async listMessage(@Query('from') from, @Query('to') to): Promise<string> {
    try {
      const messages = await this.messageService.find({
        users:{
          $all: [from,to],
        },
      });

      const projectMessages = messages.map((msg)=>{
        return{
          fromSelf: msg.sender.toString() === from,
          message: msg.message.text,
        };
      });

      return JSON.stringify(projectMessages);
    } catch (error) {
      console.log(error);
      return 'failed';
    }
  }
}
