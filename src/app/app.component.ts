import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {MATERIAL_MODULES} from './shared/material/material-imports';

export interface  Todo{
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,...MATERIAL_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todoList';

  todos: Todo [] =[];

  filteredTodosList : Todo []=[];

  newTodo: string = '';

  filter : string ='all';


  ngOnInit(): void {

    this.loadTodos();
    this.applyFilter();
    
  }

  saveTodos(): void {
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  loadTodos(): void {
    const savedTodos =localStorage.getItem('todos');
    if(savedTodos){
      this.todos = JSON.parse(savedTodos);
    }

  }

  addTodo(): void {
    if(this.newTodo.trim()) {
      const todo: Todo = {
        id: Date.now(),
        title: this.newTodo,
        completed: false
      };
      // this.todos.push(todo);
      this.todos = [...this.todos, todo]
      this.saveTodos();
      this.newTodo = '';
      this.applyFilter();
    }

    

  }

  toogleCompletion(): void{
    this.saveTodos();
    this.applyFilter();
      
    }

  removeTodo(id: number){
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveTodos();
    this.applyFilter();
  }  

  setFilter(filter: string): void{

    this.filter = filter;
    this.applyFilter();

  }
applyFilter(): void {
    if(this.filter === 'completed'){
      this.filteredTodosList =  this.todos.filter(t => t.completed);
    }
    else if (this.filter === 'active') {
      this.filteredTodosList= this.todos.filter(t => !t.completed);
    } else {
     this.filteredTodosList = [...this.todos];
    }
    

  }

}
