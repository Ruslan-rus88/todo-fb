import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { environment } from '../environments/environment';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'todo-fb';

  public todos: Todo[] = [];
  public newTodoText = '';

  private todoService = inject(TodoService);

  public ngOnInit(): void {
    console.log(environment);

    this.refreshTodos();
  }

  public ngOnDestroy(): void {
    // Clean up the subscription when the component is destroyed
  }

  public refreshTodos() {
    return this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos as Todo[];
    });
  }

  public addTodo() {
    if (!this.newTodoText) {
      return;
    }

    this.todoService.addTodo(this.newTodoText).then(() => {
      this.newTodoText = '';
      this.refreshTodos();
    });
  }

  public deleteTodo(id: string) {
    this.todoService.deleteTodo(id).then(() => {
      this.refreshTodos();
    });
  }
}

export interface Todo {
  id: string;
  text: string;
}
