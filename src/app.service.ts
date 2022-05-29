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

  getFirstFloorDetail() {
    try {
      let query = "select * from admin.first_floor";
      const result = this.connection.query(query);
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  updateFirstExit(id) {
    try {
      let query = `UPDATE admin.first_floor SET available = true WHERE id=${id}`;
      const result = this.connection.query(query);
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  updateFirstReserve(name, vehicle_no, id) {
    try {
      let query = `UPDATE admin.first_floor SET available = false, name=${name}, vehicle_no=${vehicle_no} WHERE id=${id}`;
      const result = this.connection.query(query);
      return result;
    } catch(error) {
      console.log(error);
    }
  }
}
