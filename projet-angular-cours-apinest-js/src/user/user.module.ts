import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Users } from './entity/user.entity';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        forwardRef(() => AuthModule)],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
