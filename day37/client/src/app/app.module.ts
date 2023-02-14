import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';
import { CameraService } from './camera.service';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './components/camera.component';
import { UploadComponent } from './components/upload.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes : Routes = [
  { path : '', component : CameraComponent },
  { path : 'upload', component : UploadComponent },
  { path : '**', redirectTo : '/', pathMatch : 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes),
    ReactiveFormsModule, WebcamModule
  ],
  providers: [ CameraService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
