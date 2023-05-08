import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Record from './entity/record.entity';
import { Repository } from 'typeorm';
import UserArgs from './dto/user.dto';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) {}
  async getUsers(page = 1, pageSize = 10) {
    const lastItemCount = page * pageSize;
    const skip = lastItemCount - pageSize;
    const [result, total] = await this.recordRepository.findAndCount({
      skip,
      take: pageSize,
    });

    return {
      users: result,
      total,
      pages: Math.ceil(total / pageSize),
    };
  }

  async createUser(user: UserArgs) {
    const existedUser = await this.recordRepository.findOneBy({
      ...user,
    });
    if (existedUser) throw new Error('Such a user exists');
    return this.recordRepository.insert(user);
  }
}

export default UserService;
