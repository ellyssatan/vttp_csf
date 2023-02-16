import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { ResultComponent } from './components/result.component';
import { AppRoutingModule } from './app-routing.module';
import { WebcamModule } from 'ngx-webcam';
// import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CameraService } from './camera.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule, WebcamModule, ReactiveFormsModule, MaterialModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [ CameraService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
