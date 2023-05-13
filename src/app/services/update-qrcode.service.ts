import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { QRCodeData } from '../types/QRCodeData'

@Injectable()
export class UpdateQRCodeService {
  private data = new Subject<QRCodeData>()

  updateAvailable$ = this.data.asObservable()

  constructor() { }


  update(update: QRCodeData){
    this.data.next(update)
  }
}
