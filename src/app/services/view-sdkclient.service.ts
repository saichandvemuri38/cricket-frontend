import { Injectable } from '@angular/core';
declare global { interface Window { AdobeDC: any; } }
@Injectable({
  providedIn: 'root'
})
export class ViewSDKClientService {

  constructor() { }
  // readyPromise: Promise<any> = new Promise((resolve) => {
  //   if (window.AdobeDC) {
  //     resolve();
  //   } else {
  //     document.addEventListener('adobe_dc_view_sdk.ready', () => {
  //       resolve();
  //     });
  //   }
  // });
  // adobeDCView: any;
  // ready() {
  //   return this.readyPromise;
  // }
  // previewFile(divId: string, viewerConfig: any, fileName: string) {
  //   const config: any = {
  //     /* Pass your registered client id */
  //     clientId: "my client id get from adobe" // we can import from environment file
  //   };
  //   if (divId) { /* Optional only for Light Box embed mode */
  //     /* Pass the div id in which PDF should be rendered */
  //     config.divId = divId;
  //   }
  //   /* Initialize the AdobeDC View object */
  //   this.adobeDCView = new window.AdobeDC.View(config);
  //   /* Invoke the file preview API on Adobe DC View object */
  //   const previewFilePromise = this.pdfRef = this.adobeDCView.previewFile({
  //     /* Pass information on how to access the file */
  //     content: {
  //       /* Location of file where it is hosted */
  //       location: {
  //         url: fileName, // pdf file,
  //         /*
  //         If the file URL requires some additional headers, then it can be passed as follows:-
  //         headers: [
  //             {
  //                 key: '<HEADER_KEY>',
  //                 value: '<HEADER_VALUE>',
  //             }
  //         ]
  //         */
  //       },
  //     },
  //     /* Pass meta data of file */
  //     metaData: {
  //       /* file name */
  //       fileName: 'my file.pdf',
  //       /* file ID */
  //       id: 'mmy file id'
  //     }
  //   }, viewerConfig);
  // }
}
