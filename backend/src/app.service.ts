import { Injectable } from '@nestjs/common';
import {UserService} from "./services/users.service";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
