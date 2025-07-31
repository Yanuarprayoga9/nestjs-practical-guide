import { Module } from '@nestjs/common';
import { UserController } from './user/controllers/user.controller';
import { UserService } from './user/services/user.service';
import { CreateUserUseCase } from './user/use-cases/create-user.use-case';
import { UserRepository } from './user/repositories/user.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // <- tambahkan ini
  controllers: [UserController],
  providers: [UserService, CreateUserUseCase, UserRepository],
})
export class UserModule {}
