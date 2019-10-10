import { InputType, Field } from 'type-graphql';

@InputType()
export class inputTodo {
  @Field() readonly title: string;
  @Field() readonly done: boolean;
}
