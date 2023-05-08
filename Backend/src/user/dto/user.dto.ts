import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export default class UserArgs {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  role: string;

  @Field()
  status: string;

  @Field()
  amount: number;
}
