import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item, User } from '../model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  cartForm !: FormGroup
  itemArray !: FormArray

  @Input()
  user: User | null = null

  @Output()
  receipt = new Subject<User>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cartForm = this.createForm(this.user);
  }

  private createForm(user: User | null = null): FormGroup {
    this.itemArray = this.createItems(this.user?.items ? this.user.items : [])
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      address: this.fb.control<string>('', [Validators.required, Validators.minLength(10)]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      phone: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
      express: this.fb.control(false),
      delivery: this.fb.control('', [Validators.required]),
      items: this.itemArray
    })
  }

  private createItem(i: Item | null= null): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>(i?.item ? i.item : '', [Validators.required]),
      quantity: this.fb.control(i?.quantity ? i.quantity : 1),
      price: this.fb.control(i?.price ? i.price : 1)
    })
  }

  private createItems(items: Item[] = []): FormArray {
    // returns array of FormGroup
    return this.fb.array(
      items.map(i => this.createItem(i))
    )
  }

  processForm() {
    const cart: User = this.cartForm.value as User
    console.log(">>> cart submitted", cart);

    this.receipt.next(cart)
    this.cartForm = this.createForm()
  }

  clearForm() {
    this.cartForm = this.createForm()
  }

  invalid(): boolean {
    return this.cartForm.invalid || this.itemArray.length <= 0
  }

  addItem() {
    this.itemArray.push(this.createItem())
  }

  removeItem(i: number) {
    this.itemArray.removeAt(i)
  }

  value(): User {
    return this.cartForm.value as User
  }

}
