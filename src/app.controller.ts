import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async root() {
    return {
      message: 'Welcome to Cafe API',
      version: '1.0',
    };
  }
}
