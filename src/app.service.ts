import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {

  }

  getUsers() {
    try{
      let query = "select * from admin.account";
      const result = this.connection.query(query);
      return result;
    } catch(error) {
      console.log(error);
    }
  }
  getHello(): string {
    return 'Hello World!';
  }

  getHelloTest(): number{
    return 48;
  }
  getany(): any{
    return 'anything';
  }
}
