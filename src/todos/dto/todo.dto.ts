import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class TodoDto {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field()
  done: boolean;
}
