import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  newTodo = '';
  todos: string[] = ["Do sehri And Fajar prayer", "Sleep 7 hours Daily ", "6 hourse study angular", "9 hourse Study .Net"];
  isedit: boolean = false;
  editedtodo: string = "";
  editedTodoindex!: number;
  query: string = '';
  fiteredItems: string[] = this.todos;

  addTodo() {
    console.log(this.newTodo);
    if (this.newTodo == '') {
      alert('please Enter any text ');
    }
    else {
      this.todos.push(this.newTodo);
      console.log(this.newTodo)
      alert("Totdi is added");

      this.newTodo = ' ';

    }
  }

  // edit todo functions
  editTodo(todo: string) {
    this.isedit = true;
    console.log("Todo is", todo);
    this.editedtodo = todo;
    this.editedTodoindex = this.todos.indexOf(todo);
    console.log(this.editedTodoindex);


    // this.editTodo = todo;

  }
  // update  final
  updateFinal() {
    this.todos[this.editedTodoindex] = this.editedtodo;
    this.isedit = false;

  }




  // delete todo 

  deleteTodo(todo: string) {

    let index = this.todos.lastIndexOf(todo);
    console.log(index);
    this.todos.splice(index, 1);
    alert("Item is deleted ");



  }

  // search filter
  search() {
    console.log("hy");
    if (!this.query) {
      this.fiteredItems = this.todos;
      console.log("empty");
    }

    this.fiteredItems = this.todos.filter(todo => todo.toLowerCase().includes(this.query.toLowerCase()));

  }

}
