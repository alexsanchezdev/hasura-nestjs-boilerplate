import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Included Hasura metadata to be imported on the first run to create an
  // Hasura Action that consume this endpoint.

  @Post()
  @HttpCode(HttpStatus.OK)
  getHello(): { message: string } {
    const message = this.appService.getHello();
    return { message };
  }
}
