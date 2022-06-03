import { Injectable } from '@nestjs/common';

/**
 * 長い処理などを関数にする 
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
