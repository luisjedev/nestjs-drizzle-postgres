import { Body, Controller, Get, Post } from '@nestjs/common';
import { SayHelloWorldDto } from '@/common/dto/hello-world.dto';
import { AppService } from '@/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('hello')
  post(@Body() body: SayHelloWorldDto) {
    return this.appService.sayHello(body);
  }

  @Get()
  getFirstRole() {
    return this.appService.getFirstRole();
  }
}
