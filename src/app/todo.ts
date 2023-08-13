export class Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(
    title: string,
    description: string,
    completed: boolean,
    id: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
