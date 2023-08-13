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
    this.todos = [];
  }

  ngOnInit(): void {}

  addTodo = (todo: Todo) => {
    console.log('add', todo);
    this.todos.push(todo);
  };

  deleteTodo = (todo: Todo) => {
    console.log('delete', todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  };
}
