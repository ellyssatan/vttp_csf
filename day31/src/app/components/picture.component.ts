import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MyImage } from '../model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent {

  @Input()
  imageUrl = "/assets/cat.jpeg"
  
  @Input()
  width = 50;

  @Output()
  onClicked = new Subject<MyImage>();

  imageClicked() {
    //console.info("image clicked", this.imageURL);
    // fire the event
    const img: MyImage = {
      imageName: this.imageUrl,
      size: this.width
    }
    this.onClicked.next(img)
  }

  resize(factor: number) {
    this.width = this.width + factor

  }
}