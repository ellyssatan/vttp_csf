import { Component } from '@angular/core';
import { INVENTORIES } from './constant';
import { CustomerSelection, Inventory } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  content: CustomerSelection[] = []

  selected(selection: CustomerSelection) {
    console.info('>>> app.component selected: ', selection)
    // filter returns an array
    // const inv = INVENTORIES.filter(v => v.imageUrl == selection.name)
    // this.content.push(inv[0])
    this.content.push(selection)
  }

  deleteItem(i: number) {
    // Start at index i, delete 1 item
    this.content.splice(i,1)
  }
}
