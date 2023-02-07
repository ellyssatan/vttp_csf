import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {

  constructor(private router : Router) {}

  process() {
    console.info('clicked cat pic')
    this.router.navigate(['/'])
  }
}
