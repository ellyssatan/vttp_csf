import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserDetail } from '../model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnChanges {

  @Input()
  friends: UserDetail[] = []

  ngOnChanges(changes: SimpleChanges): void {
      
  }
}
