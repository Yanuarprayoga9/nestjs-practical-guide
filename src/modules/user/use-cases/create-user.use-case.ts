import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(data: { name: string; email: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.userRepo.create(data);
  }
}
