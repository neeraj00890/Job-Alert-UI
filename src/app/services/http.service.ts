import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {

  }


  get(url: string, headers: HttpHeaders) {
   return this.httpClient.get(environment.baseUrl + url, {
      headers: headers
    }).toPromise();
  }

  post(url: string, payload: any, headers: HttpHeaders = new HttpHeaders()) {
    headers.set('content-type', 'application/json');
   return this.httpClient.post(environment.baseUrl + url, payload, {
      headers: headers
    }).toPromise();
  }

  put(url: string, payload: any, headers: HttpHeaders) {
    return this.httpClient.put(environment.baseUrl + url, payload, {
      headers: headers
    }).toPromise();
  }


}
