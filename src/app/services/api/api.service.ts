import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = "http://localhost:5000/api";

  public socket;
  constructor(private http: HttpClient) {
    this.socket = io.connect("http://localhost:5000/api");
  }
  listen(eventname: string): Observable<any> {
    return new Observable((subscribe) => {
      this.socket.on(eventname, (data) => {
        subscribe.next(data);
      })
    })
  }
  emit(eventname: string, data: any) {
    this.socket.emit(eventname, data);
  }

  public loginDetails(items): Observable<any> {
    console.log(items)
    return this.http.post<any>(`${this.url}/login`, items).pipe(catchError(this.errorHandler));
  }

  public createTeams(items): Observable<any> {
    console.log(items)
    return this.http.post<any>(`${this.url}/create-teams`, items).pipe(catchError(this.errorHandler));
  }

  public addPlayer(items): Observable<any> {
    return this.http.post<any>(`${this.url}/add-player`, items).pipe(catchError(this.errorHandler));
  }

  public records(id): Observable<any> {
    return this.http.get<any>(`${this.url}/records/${id}`).pipe(catchError(this.errorHandler));
  }

  public ballValue(items) {
    return this.http.post<any>(`${this.url}/overs-record`, items).pipe(catchError(this.errorHandler));
  }

  public getBallRecords(id) {
    return this.http.get<any>(`${this.url}/ball-records/${id}`).pipe(catchError(this.errorHandler));
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.log("error in API service", error);
    return throwError(error);
  }

}
export const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json'
    // 'Content-Type': 'text/plain',

  }),

};
