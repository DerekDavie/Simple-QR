import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QRCodeData } from '../types/QRCodeData';
import { UpdateQRCodeService } from '../services/update-qrcode.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent {
  submitText = "Generate QR code"
  entryFormGroup = new FormGroup({
    targetURL: new FormControl(''),
    imgHeight: new FormControl(75),
    imgWidth: new FormControl(75)
  })
  tempPicture = ''
  fileReader = new FileReader()

  constructor(
    private qrCode: UpdateQRCodeService
    ){
      this.fileReader.addEventListener(
        "load",
        () => {
          this.tempPicture = String(this.fileReader.result)
        },
        false
      )
  }

  onSubmit(){
    console.log("Entry form submited!")
    var qrCodeData: QRCodeData = new QRCodeData()
    console.log(this.entryFormGroup.value.targetURL)
    if(this.entryFormGroup.value.targetURL){
      qrCodeData.qrData = this.entryFormGroup.value.targetURL
    }
    if(this.tempPicture !== ''){
      qrCodeData.imageSrc = this.tempPicture
    }
    if(this.entryFormGroup.value.imgHeight){
      qrCodeData.imageHeight = this.entryFormGroup.value.imgHeight
    }
    if(this.entryFormGroup.value.imgWidth){
      qrCodeData.imageWidth = this.entryFormGroup.value.imgWidth
    }
    this.qrCode.update(qrCodeData)
  
  }
  onPictureSelect(picture: any){
    console.log("picture selected")
    console.log(picture.target.files[0].name)
    console.log(this.fileReader.readAsDataURL(picture.target.files[0]))
    //this.tempPicture = picture.target.files[0].name
  }

}
