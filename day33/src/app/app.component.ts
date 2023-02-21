import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserDetailsComponent } from './components/user-details.component';
import { UserDetail } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(UserDetailsComponent)
  userDetail: UserDetailsComponent

  ngOnInit(): void {
    console.info(">>> ngOnInit", this.userDetail)
  }

  ngAfterViewInit(): void {
    console.info(">>> ngAfterViewInit userDetails", this.userDetail)
  }

  process(userDetail: UserDetail) {
    console.info(">>> app.component", userDetail)
    this.newName = userDetail.name
    this.users = []...this.users, userDetail]
    this.users.push(userDetail)
    const u: UserDetail = []
    for (let n of this.users) {
      u.push(n)
    }
    this.users = u

  }

  updateUser() {
    console.info(">>> updating user")

  }

  deleteUser() {
    console.info(">>> deleting user")
    const user = this.userDetail.getFormValue()
    console.info("form value", user)

  }
  title = 'day33';
}
