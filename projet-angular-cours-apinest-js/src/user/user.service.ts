
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

  async create(createUserDto: UserDto): Promise<Users> {
    const { User_name, Password, Name, Surname, Mail, phone, Role, Upvote } = createUserDto;
    const user: Users = await this.usersRepository.create({User_name, Password, Name, Surname, Mail, phone, Role, Upvote});
    return await this.usersRepository.save(user);
  }

  async findByUserName(User_name: string): Promise<Users> {
    return this.usersRepository.findOne({User_name});
  }
}
