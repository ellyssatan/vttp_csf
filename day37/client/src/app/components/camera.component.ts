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
  
  // Get a reference of the component
  @ViewChild(WebcamComponent)
  webcam !: WebcamComponent

  width = 1000
  height = 1000

  constructor(private router : Router, private camSvc : CameraService) {}

  trigger = new Subject<void>()
  pics : string[] = []
  sub$ !: Subscription

  // Lifecycle listeners
  ngOnInit(): void {
    console.info('>>> onInit: ', this.webcam)
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }

  ngAfterViewInit(): void {
    console.info(">>> afterViewInit: ", this.webcam)
    this.webcam.trigger = this.trigger
    this.webcam.width = 100
    this.webcam.height = 100

    this.sub$ = this.webcam.imageCapture.subscribe(this.snapshot.bind(this))
  }

  snap() {
    this.trigger.next()
  }

  snapshot(img : WebcamImage) {
    console.log('imageAsBase64: ', img.imageAsBase64)
    console.log('imageAsDataUrl: ', img.imageAsDataUrl)
    console.log('imageData: ', img.imageData)

    this.camSvc.imageData = img.imageAsDataUrl
    this.pics.push(img.imageAsDataUrl)
  }
}
