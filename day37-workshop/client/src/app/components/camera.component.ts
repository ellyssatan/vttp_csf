import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamComponent, WebcamImage } from 'ngx-webcam';
import { Subject, Subscription } from 'rxjs';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(WebcamComponent)
  webcam !: WebcamComponent
  width = 500
  height = 500
  pics : string[] = []
  sub$ !: Subscription
  trigger = new Subject<void>

  constructor(private router : Router, private camSvc : CameraService) {}
  
  ngOnInit(): void {
    console.log('init...' + this.webcam);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.webcam.trigger = this.trigger
    this.sub$ = this.webcam.imageCapture.subscribe(
      this.snapshot.bind(this)
    )
  }

  snap() {
    this.trigger.next()
  }

  snapshot(webcamImg : WebcamImage) {
    this.camSvc.imageData = webcamImg.imageAsDataUrl
    this.pics.push(webcamImg.imageAsDataUrl)
  }

}
