import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todos } from './todos.entity';
import { Repository } from 'typeorm';
import { RegisterTodoDto } from './dto/new-todo.dto';
import { TodoDto } from './dto/todo.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>,
  ) {}

  findAll(): Promise<Todos[]> {
    return this.todosRepository.find();
  }

  findOne(id: string): Promise<Todos> {
    return this.todosRepository.findOne({ id });
  }

  async createOne(todo: RegisterTodoDto): Promise<TodoDto> {
    const todoEntity = this.todosRepository.create(todo);
    const createdTodoEntity = await this.todosRepository.save(todoEntity);
    const createdTodo = plainToClass(TodoDto, createdTodoEntity);
    return createdTodo;
  }
}
