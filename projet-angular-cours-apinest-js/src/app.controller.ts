import { Controller, Post, UseGuards, Request, Logger, Body, Patch, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
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
    return await this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() userDto: UserDto){
    return await this.userService.create(userDto)
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<void> {
    return this.userService.update(id, userDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
