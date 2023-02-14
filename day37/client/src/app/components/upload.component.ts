import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imageData = ""
  complainForm !: FormGroup
  blob!: Blob

  constructor(private fb : FormBuilder, private router : Router, public camSvc : CameraService) {}

  ngOnInit(): void {
    if (!this.camSvc.imageData) {
      this.router.navigate(['/'])
      return
    }

    this.imageData = this.camSvc.imageData
    this.complainForm = this.createForm()
    this.blob = this.dataURItoBlob(this.imageData)
    console.info('>>> blob: ', this.blob)
  }

  upload() {
    const value = this.complainForm.value
    console.info('value: ', value)
    this.camSvc.upload(value, this.blob)
      .then(result => {
        console.info('>>>> key: ', result.imageKey)
        this.router.navigate(['/'])
      }).catch(error => {
        console.error('>>>> error: ', error)
      })
  }

  dataURItoBlob(imageData: string) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(imageData.split(',')[1]);

    // separate out the mime component
    var mimeString = imageData.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], {type: mimeString});
  }

  createForm() : FormGroup {
    return this.fb.group({
      title : this.fb.control(''),
      complain : this.fb.control(''),
    })
  }

}
