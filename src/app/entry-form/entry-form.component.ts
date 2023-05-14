import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QRCodeData } from '../types/QRCodeData';
import { UpdateQRCodeService } from '../services/update-qrcode.service';
import { QRCodeErrorCorrectionLevel } from "qrcode"

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
    imgWidth: new FormControl(75),
    lockRatio: new FormControl(true),
    correctionLevel: new FormControl('Medium')
  })
  tempPicture = ''
  imgRatio = 1
  levelList = ['Low', 'Medium', 'Quality', 'High']

  constructor(
    private qrCode: UpdateQRCodeService
    ){
      this.entryFormGroup.patchValue({correctionLevel: 'Medium'})
  }

  updateQRCode(){
    var qrCodeData: QRCodeData = new QRCodeData()
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
    if(this.entryFormGroup.value.correctionLevel){
      qrCodeData.errorCorrectionLevel = (this.entryFormGroup.value.correctionLevel.charAt(0)) as QRCodeErrorCorrectionLevel
    }
    this.qrCode.update(qrCodeData)

  }
  onPictureSelect(picture: any){
    if(picture.target.files[0]){
      const allowedTypes = ['image/png', 'image/jpeg']

      if(!allowedTypes.includes(picture.target.files[0].type)){
        console.log("WARNING: filetype not allowed")
        this.tempPicture = ''
        return 
      }
      const reader = new FileReader()
      reader.onload = (inputFile: any) => {
        const image = new Image()
        image.src = inputFile.target.result
        image.onload = rs => {
          const target = rs.currentTarget as HTMLImageElement
          if(target){
            this.entryFormGroup.patchValue({
              imgHeight: target['height'],
              imgWidth: target['width']
            })
            this.tempPicture = inputFile.target.result
            this.resetAspectRatio()
            this.updateQRCode()
          }
        }
      }
      reader.readAsDataURL(picture.target.files[0])
    }
    this.updateQRCode()
  }
  toggleRatioLock(checkbox: any){
    if(this.entryFormGroup.value.lockRatio){
      this.resetAspectRatio()
    }
    
  }
  resetAspectRatio(){
    if(this.entryFormGroup.value.imgHeight && this.entryFormGroup.value.imgWidth){
      this.imgRatio = this.entryFormGroup.value.imgHeight/this.entryFormGroup.value.imgWidth
    }
    else{
      this.imgRatio = 1
    }
    
  }
  updateImgHeight(height: any){
    this.entryFormGroup.patchValue({imgHeight: height.target.value})
    if(this.entryFormGroup.value.lockRatio){
      this.entryFormGroup.patchValue({imgWidth: height.target.value*(1/this.imgRatio)})
    }
    this.updateQRCode()
  }
  updateImgWidth(width: any){
    this.entryFormGroup.patchValue({imgWidth: width.target.value})
    if(this.entryFormGroup.value.lockRatio){
      this.entryFormGroup.patchValue({imgHeight: width.target.value*(this.imgRatio)})
    }
    this.updateQRCode()
  }
  updateTargetURL(url: any){
    this.entryFormGroup.patchValue({targetURL: url.target.value})
    this.updateQRCode()
  }
  updateCorrectionLevel(level: any){
    this.entryFormGroup.patchValue({correctionLevel: this.levelList[level.target.value.charAt(0)]})
    this.updateQRCode()
  }

}