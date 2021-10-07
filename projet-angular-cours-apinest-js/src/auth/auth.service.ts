import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { from, Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  private comparePassword(Password: string, storedPasswordHash: string): boolean{
    if(Password == storedPasswordHash){
      return true;
    }else{
      return false;
    }
  }
  
  async validateUser(User_name: string, pass: string): Promise<any> {
    const user = await this.userService.findByUserName(User_name);
    if (this.comparePassword(user.Password, pass)) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { User_name: user.User_name, sub: user.ID };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
