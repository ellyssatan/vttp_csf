import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnChanges {

  @Input()
  user !: User

  @Input()
  name !: string

  total = 0

  ngOnChanges(changes: SimpleChanges): void {
    console.info("changes: ", changes)
    // console.info("changes: ", changes['user'])
    const u = changes['user'].currentValue as User

    this.total = 0
    for(let i of u.items) {
      this.total += i.price*i.quantity
    }
  }

}
