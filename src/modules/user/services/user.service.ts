import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserUseCase } from '../use-cases/create-user.use-case';

@Injectable()
export class UserService {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async create(dto: CreateUserDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.createUserUseCase.execute(dto);
  }
}
