import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import UserService from './user.service';
import { Injectable } from '@nestjs/common';
import UsersArgs from './dto/users.dto';
import UsersModel from './model/users.model';
import UserArgs from './dto/user.dto';

@Injectable()
@Resolver()
class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean)
  async createUser(@Args() user: UserArgs): Promise<boolean> {
    try {
      await this.userService.createUser(user);
      return true;
    } catch (e) {
      throw e;
    }
  }

  @Query(() => UsersModel)
  async getUsers(@Args() args: UsersArgs): Promise<UsersModel> {
    return this.userService.getUsers(args.page, args.pageSize);
  }
}

export default UserResolver;
