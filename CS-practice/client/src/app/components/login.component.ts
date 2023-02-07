import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { User } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form !: FormGroup

  constructor(private fb : FormBuilder, private fSvc : FormService) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  private createForm() : FormGroup {
    return this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required])
    })
  }

  loginUser() {
    const data: User = this.form.value as User
    console.info('>>>> login user form data: ', data)

    this.fSvc.loginUser(data)
      .then(result => {
        console.info('>>> creating user: ', result)
        this.createForm()
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })
  }

}
