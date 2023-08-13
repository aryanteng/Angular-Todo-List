import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        description: 'This is Todo One',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo Two',
        description: 'This is Todo Two',
        completed: false,
      },
      {
        id: 3,
        title: 'Todo Three',
        description: 'This is Todo Three',
        completed: false,
      },
    ];
  }

  ngOnInit(): void {}

  deleteTodo = (todo: Todo) => {
    console.log('delete', todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  };
}
