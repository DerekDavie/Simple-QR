import { IModel } from './imodel'
import { QRCodeErrorCorrectionLevel } from "qrcode"
import { QRCodeElementType } from 'angularx-qrcode/public-api';

export class QRCodeData extends IModel{
  public allowEmptyString?: boolean;
  public alt?: string;
  public ariaLabel?: string;
  public colorDark?: string;
  public colorLight?: string;
  public cssClass?: string;
  public elementType?: QRCodeElementType;
  public errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
  public imageSrc?: string;
  public imageHeight?: number;
  public imageWidth?: number;
  public margin?: number;
  public qrData: string = 'ddavie.com';
  public scale?: number;
  public title?: string;
  public width?: number;
}
