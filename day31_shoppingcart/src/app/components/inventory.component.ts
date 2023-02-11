import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORIES } from '../constant';
import { CustomerSelection, Inventory } from '../model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  @Output()
  onSelection = new Subject<CustomerSelection>()

  inventories: Inventory[] = INVENTORIES
  quantity = 0

  selected(name: string) {
    const selection = {
      name,
      quantity: this.quantity
    } as CustomerSelection
    this.onSelection.next(selection)
  }

  editCart(quantity: number) {
    this.quantity = this.quantity + quantity
  }
}
