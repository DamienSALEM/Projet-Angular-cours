
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Users } from './entity/user.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        ) {}

  async findByUserName(User_name: string): Promise<Users> {
    return this.usersRepository.findOne({User_name});
  }
}
