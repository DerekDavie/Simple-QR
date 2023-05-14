import { Component } from '@angular/core';
import { QRCodeErrorCorrectionLevel } from "qrcode"
import { QRCodeElementType } from 'angularx-qrcode/public-api';
import { UpdateQRCodeService } from '../services/update-qrcode.service';
import { Subscription } from 'rxjs'
import { QRCodeData } from '../types/QRCodeData';



@Component({
  selector: 'app-preview-window',
  templateUrl: './preview-window.component.html',
  styleUrls: ['./preview-window.component.scss']
})
export class PreviewWindowComponent {
  public qrCode: QRCodeData = new QRCodeData()
  public qrCodeLink: string = ""
  public qrErrorResistance = "H" as QRCodeErrorCorrectionLevel
  public subscription: Subscription



  constructor(private qrUpdates: UpdateQRCodeService){
    this.subscription = qrUpdates.updateAvailable$.subscribe(
      data => {
        this.qrCode.qrData = data.qrData
        this.qrCode.imageSrc = data.imageSrc
        this.qrCode.imageHeight = data.imageHeight
        this.qrCode.imageWidth = data.imageWidth
        this.qrCode.errorCorrectionLevel = data.errorCorrectionLevel
      }
    )
  }

  onChangeURL(url: any){
    this.qrCodeLink = url
  }
}