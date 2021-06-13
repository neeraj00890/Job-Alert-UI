import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {

  }


  async get(url: string, headers: HttpHeaders) {
    this.httpClient.get(environment.baseUrl + url, {
      headers: headers
    }).toPromise();
  }

  async post(url: string, payload: any, headers: HttpHeaders = new HttpHeaders()) {
    headers.set('content-type', 'application/json');
    this.httpClient.post(environment.baseUrl + url, payload, {
      headers: headers
    }).toPromise();
  }

  async put(url: string, payload: any, headers: HttpHeaders) {
    this.httpClient.put(environment.baseUrl + url, payload, {
      headers: headers
    }).toPromise();
  }


}
