import { Injectable } from '@angular/core';
import * as pdf from 'pdfmake/build/pdfmake';
import * as BlobUtil from 'blob-util';
import htmlToPdfmake from 'html-to-pdfmake';

@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor() { }
  convertHtmlToPdf(html: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      let htmlString = htmlToPdfmake(html)
      const documentDefinition = { content: htmlString };
      const pdfDocGenerator = pdf.createPdf(documentDefinition);
      pdfDocGenerator.getBlob((pdfBlob) => {
        resolve(pdfBlob);
      });
    });
  }
}



