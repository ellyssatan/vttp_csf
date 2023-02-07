import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { User } from '../model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup

  constructor(private fb : FormBuilder, private fSvc : FormService) {}

  ngOnInit(): void {
    this.registerForm = this.createForm()
  }

  private createForm() : FormGroup {
    return this.fb.group({
      name: this.fb.control(""),
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required])
    })
  }

  createUser() {
    const data: User = this.registerForm.value as User
    console.info('>>>> create user form data: ', data)

    this.fSvc.createUser(data)
      .then(result => {
        console.info('>>> creating user: ', result)
        this.createForm()
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })
  }
}
