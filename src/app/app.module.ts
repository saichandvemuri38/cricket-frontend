import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, myRoutings } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BlobService } from './services/blob.service';
import { ViewSDKClientService } from './services/view-sdkclient.service';

@NgModule({
  declarations: [
    AppComponent,
    myRoutings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    PdfViewerModule
  ],
  providers: [BlobService,ViewSDKClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
