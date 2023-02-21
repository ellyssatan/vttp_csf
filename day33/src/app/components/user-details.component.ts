import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDetail } from '../model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Output()
  // onUserDetail = 

  form !: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  getFormValue() {

  }

  processForm() {
    const UserDetail: UserDetail = this.form.value as UserDetail
  }

  process() {

  }

  private createForm(): FormGroup {
    return this.fb.
  }
}
