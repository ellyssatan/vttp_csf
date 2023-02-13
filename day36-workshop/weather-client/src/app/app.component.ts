import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-client';

  constructor(private router : Router) {}

  ngOnInit(): void {
    
  }

  goHome() {
    this.router.navigate(['/'])
  }

  goAddCity() {
    this.router.navigate(['/city'])
  }


}
