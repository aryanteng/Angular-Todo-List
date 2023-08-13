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
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
      return;
    }
    this.todos = [];
  }

  ngOnInit(): void {}

  addTodo = (todo: Todo) => {
    console.log('add', todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  deleteTodo = (todo: Todo) => {
    console.log('delete', todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  completeTodo = (todo: Todo) => {
    console.log('complete', todo);
    this.todos = this.todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };
}
