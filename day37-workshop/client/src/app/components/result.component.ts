import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  imageData = ""
  form !: FormGroup
  blob !: Blob

  constructor(private fb : FormBuilder, private router : Router, private camSvc : CameraService) {}

  ngOnInit(): void {
    if (!this.camSvc.imageData) {
      this.router.navigate(['/'])
      return;
    }
    this.imageData = this.camSvc.imageData
    this.form = this.fb.group({
      title : this.fb.control(''),
      complain : this.fb.control('')
    })

    this.blob = this.dataURItoBlob(this.imageData)
    console.log('blobby from result com', this.blob)
  }

  dataURItoBlob(dataURI : String) {
    var byteString = atob(dataURI.split(',')[1]);
    let mimeString = dataURI.split(',')[0].split(';')[0];
    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for (var i = 0 ; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type : mimeString});
  }

  upload() {
    const data = this.form.value
    this.camSvc.upload(data, this.blob)
      .then((result) => {
        console.log('uploaded')
        this.router.navigate(['/'])
      }).catch(error => {
        console.log('>>>> error from upload: ', error)
      })
  }
}
