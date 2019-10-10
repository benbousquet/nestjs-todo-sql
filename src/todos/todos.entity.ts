import { Entity, PrimaryColumn, Column, Generated } from 'typeorm';

@Entity()
export class Todos {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  done: boolean;
}
