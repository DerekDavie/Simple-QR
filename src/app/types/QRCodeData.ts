import { IModel } from './imodel'
import { QRCodeErrorCorrectionLevel } from "qrcode"
import { QRCodeElementType } from 'angularx-qrcode/public-api';

export class QRCodeData extends IModel{
  public allowEmptyString: boolean = false;
  public alt?: string;
  public ariaLabel?: string;
  public colorDark: string = '#000000ff';
  public colorLight: string = '#ffffffff';
  public cssClass: string = 'qrcode';
  public elementType: QRCodeElementType = 'canvas';
  public errorCorrectionLevel: QRCodeErrorCorrectionLevel = 'M';
  public imageSrc?: string;
  public imageHeight?: number;
  public imageWidth?: number;
  public margin: number = 4;
  public qrData: string = 'ddavie.com';
  public scale: number = 4;
  public title?: string;
  public width: number = 300;
}
