import { Component } from '@angular/core';
import { MyImage } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image = "/assets/cat2.avif"
  imageWidth = 20;

  images = [
    "/assets/cat.jpeg",
    "/assets/cat2.avif",
  ]

  imageClicked(data: MyImage) {
    console.info(`image clicked: `, data)
  }


}
