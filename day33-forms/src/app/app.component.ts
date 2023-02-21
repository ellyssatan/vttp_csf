import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoComponent } from './components/todo.component';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild(TodoComponent)
  todoComp!: TodoComponent

  @ViewChild('clearBtn')
  clearBtn!: ElementRef

  ngOnInit(): void {
      console.info("onInit", this.todoComp)
  }

  ngAfterViewInit(): void {
    console.info("ngAfterViewInit", this.todoComp)
  }

  data: Todo = {
    name: 'barney',
    email: 'barney@gmail.com',
    tasks: [
      { task: 'jogging', priority: 'med'},
      { task: 'lunch with friends', priority: 'high'},
    ]
  }

  newTodo(todo: Todo) {
    console.info("in new todo")
    console.info(">>>", todo)
  }

  processTodo() {
    console.info("in process todo")
    this.data = this.todoComp.value()
    this.todoComp.clearForm()
    console.info("in process todo ", this.data)
    this.clearBtn.nativeElement.innerText = `${this.data.name} - ${this.data.email}`
    // this.clearBtn.nativeElement.disabled = `${this.data.name} - ${this.data.email}`
  }

}
