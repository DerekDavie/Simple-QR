import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PreviewWindowComponent } from './preview-window/preview-window.component'
import { QRCodeModule } from 'angularx-qrcode';
import { UpdateQRCodeService } from './services/update-qrcode.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    PreviewWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  providers: [
    UpdateQRCodeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
