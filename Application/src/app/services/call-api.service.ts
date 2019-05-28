import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  private apiUrl: string = "http://192.168.1.73:3000/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    })
  };

  public getApiUrl() : string {
    return this.apiUrl;
  }

  public getHttpOptions(): any {
    return this.httpOptions;
  }

  constructor() { }
}
