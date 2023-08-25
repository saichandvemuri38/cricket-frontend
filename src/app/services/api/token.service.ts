import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(public injectoror: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.injectoror.get(ApiService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
