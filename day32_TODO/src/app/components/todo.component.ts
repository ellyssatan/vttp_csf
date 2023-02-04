import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Todo, User } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form!: FormGroup
  todosArray!: FormArray
  user!: User

  // priorities: string[] = ['low', 'med', 'high']

  constructor(private fb: FormBuilder) {  }

  @Output()
  onNewTodo = new Subject<User>()

  @Input()
  todo: User | null = null
  
  ngOnInit():void {
    // build the form
    this.form = this.createForm(this.user)
  }

  // submit
  process() {
    const user = this.form.value as User
    console.info('>> form:', user)
    this.onNewTodo.next(user);
  }

  addItem() {
    this.todosArray.push(this.createTodo())
  }

  deleteItem(idx: number) {
    this.todosArray.removeAt(idx)
  }

  private createForm(user: User | null = null): FormGroup {
    this.todosArray = this.createTodos(user?.todos ? user.todos : [])
    return this.fb.group({
      name: this.fb.control(user?.name? user.name: '', [ Validators.required ]),
      email: this.fb.control(user?.email? user.email: '', [ Validators.required, Validators.email ]),
      tasks: this.todosArray
    })
  }

  private createTodos(todos:Todo[] = []): FormArray {
    return this.fb.array(
      todos.map(t => this.createTodo(t))
    )
  }

  private createTodo(todo: Todo | null = null): FormGroup {
    return this.fb.group({
      task: this.fb.control<string>(todo?.task? todo.task:'', [Validators.required]),
      priority: this.fb.control(todo?.priority? todo.priority: ''),
      dueDate: this.fb.control(todo?.dueDate ? todo.dueDate : '')
    })
  }
}
