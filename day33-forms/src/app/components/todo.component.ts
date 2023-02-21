import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Todo, Task } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Output()
  onNewTodo = new Subject<Todo>()   // subject, btr than eventemitter   // event.next("")

  @Input()
  todo : Todo | null = null

  todoForm !: FormGroup // avoid checks
  taskArray !: FormArray

  constructor(private fb: FormBuilder) {}    // similar to @Autowired

  ngOnInit(): void {
    this.todoForm = this.createForm(this.todo);   // will make sure its properly initialised
  }

  private createForm(todo: Todo | null = null): FormGroup {
    // this.taskArray = this.createTasks(this.todo?.tasks ? this.todo.tasks : [])
    if (this.todo?. tasks)
      this.taskArray = this.createTasks(todo?.tasks)
    else
      this.taskArray = this.createTasks()

    return this.fb.group({
      name: this.fb.control<string>(todo?.name ? todo.name : '', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>(todo?.email ? todo.email : '', [Validators.required, Validators.email]),
      tasks: this.taskArray
    })
  }

  private createTask(task: Task | null= null): FormGroup {
    return this.fb.group({
      task: this.fb.control<string>(task?.task ? task.task : '', [Validators.required]),
      priority: this.fb.control(task?.priority ? task.priority : 'med')
    })
  }

  private createTasks(tasks: Task[] = []): FormArray {
    // returns array of FormGroup
    return this.fb.array(
      tasks.map(t => this.createTask(t))
    )
  }

  processForm() {
    const todo: Todo = this.todoForm.value as Todo
    console.info(">>> saved todo: ", todo)
    // another way, if names dont match
    // const t: Todo = {
    //   name: this.todoForm.get('name')?.value,
    //   email: this.todoForm.get('email')?.value
    // }

    this.onNewTodo.next(todo)
    this.todoForm = this.createForm();
  }

  addTask() {
    this.taskArray.push(this.createTask())
  }

  removeTask(i: number) {
    this.taskArray.removeAt(i)
  }

  value(): Todo {
    return this.todoForm.value as Todo
  }

  invalid(): boolean {
    return this.todoForm.invalid || this.taskArray.length <= 0
  }
  
  clearForm() {
    this.todoForm = this.createForm();
  }
}