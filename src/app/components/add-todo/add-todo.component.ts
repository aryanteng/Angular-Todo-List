import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string;
  description: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  onSubmit() {
    if (this.title == undefined || this.description == undefined) {
      alert('Please fill all the fields');
      return;
    }
    const todo = new Todo(Math.random(), this.title, this.description, false);
    this.addTodo.emit(todo);
  }
}
