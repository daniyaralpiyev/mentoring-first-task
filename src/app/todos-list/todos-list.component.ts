import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';

export interface Todos {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, NgIf, TodoCardComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todos: Todos[] = [];

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any) => {
        this.todos = response;
      }
    )
  }

  deleteTodo_list(id: number) {
    this.todos = this.todos.filter(
      todo => {
        if (id === todo.id) {
          return false;
        } else {
          return true;
        }
        // todo => todo.id !== id
      }
    )
  }
}
