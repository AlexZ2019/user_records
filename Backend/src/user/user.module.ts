import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from './user.service';
import UserResolver from './user.resolver';
import Record from './entity/record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export default class UserModule {}
