import { Controller, Get, Post, Res, UseGuards, Request, Logger, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { Response } from 'express';
import { UserDto } from './user/dto/user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UserService,
    ) {}
    private readonly logger = new Logger(AppController.name);

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const auth = await this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() userDto: UserDto){
    return await this.userService.create(userDto)
  }
}
