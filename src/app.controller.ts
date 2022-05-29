import { Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

  @Get('/first-floor') 
  getFirstFloorDetails() : any {
    return this.appService.getFirstFloorDetail();
  }

  @Get('/first-floor/exit/:id') 
  updateExit(@Param('id') id: number
  ) : any {
    console.log('INSIDE FIRST EXIT');
    console.log(id);
    return this.appService.updateFirstExit(id);
  }

  @Patch('/first-floor/reserve')
  updateReserve(name, vehicle_no, id): any {
    return this.appService.updateFirstReserve(name, vehicle_no, id);
  }
}
