import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { TodoDto } from './dto/todo.dto';
import { inputTodo } from './inputs/todo.input';

@Resolver('Todos')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [TodoDto])
  async allTodos(): Promise<TodoDto[]> {
    return this.todosService.findAll();
  }

  @Query(() => TodoDto)
  async todo(@Args('id') id: string): Promise<TodoDto> {
    return this.todosService.findOne(id);
  }

  @Mutation(() => TodoDto)
  async createTodo(@Args('data') data: inputTodo) {
    return this.todosService.createOne(data);
  }

  @Mutation(() => TodoDto)
  async completeTodo(@Args('id') id: string) {
    return this.todosService.completeTask(id);
  }
}
