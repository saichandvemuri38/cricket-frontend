import { AfterViewInit, Component, ElementRef, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BlobService } from 'src/app/services/blob.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('myTestDiv') myTestDiv: ElementRef;
  public login_form: any;
  constructor(public fb: FormBuilder, public router: Router, public sanitizer: DomSanitizer, private pdfConversionService: BlobService) {

  }

  public ngOnInit(): void {
    this.createForm();

  }
  public ngAfterViewInit() {
    console.log(this.myTestDiv);
  }

  public createForm() {
    this.login_form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }
  public submit() {
    console.log(this.login_form.value);
    this.convertToPdf();
    this.router.navigateByUrl('home')
  }
  public pdfSrc;
  htmlContent: any;
  convertToPdf() {
    this.htmlContent = this.myTestDiv.nativeElement.innerHTML;
    console.log(this.htmlContent)
    this.pdfConversionService.convertHtmlToPdf(this.htmlContent).then((pdfBlob: Blob) => {
      // Use the resulting PDF blob as needed (e.g., upload to server, download, display, etc.)
      console.log('PDF Blob:', pdfBlob);
      let url = URL.createObjectURL(pdfBlob);
      this.pdfSrc = url;
    }).catch((error) => {
      console.error('Error converting HTML to PDF:', error);
    });
  }

}
