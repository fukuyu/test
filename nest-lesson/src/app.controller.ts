import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//URLによって何を呼び出すか
@Controller('base')//一階層上ファイルの指定ができる?　共有の階層の時に使用する
export class AppController {
  //階層をどんだけ増やしても良い
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
