import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getHelloTest(): number {
    return this.appService.getHelloTest();
  }
  @Get('/try')
  getany(): any {
    return this.appService.getany();
  }

  @Get('/users') 
  getUserDetails() : any {
    return this.appService.getUsers();
  }
}
