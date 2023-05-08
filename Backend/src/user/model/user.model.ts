import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UserModel {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field()
  address: string;

  @Field()
  status: string;

  @Field()
  amount: number;
}

export default UserModel;
