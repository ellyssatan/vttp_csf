import { Component } from '@angular/core';
import { User } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user !: User
  name !: string

  processNewOrder(u: User) {
    this
    console.info(">>> From App.component ", this.user)
  }

}
