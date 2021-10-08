import { Controller, Get, Post, Res, UseGuards, Request, Logger, Body, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { Response } from 'express';
import { UserDto } from './user/dto/user.dto';
import { get } from 'http';
import { CategoryService } from './category/category.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UserService,
    private categoryService: CategoryService
    ) {}
    private readonly logger = new Logger(AppController.name);

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const auth = await this.authService.login(req.user);
    return auth.access_token
  }

  @Post('register')
  async register(@Body() userDto: UserDto){
    return await this.userService.create(userDto)
  }
}
