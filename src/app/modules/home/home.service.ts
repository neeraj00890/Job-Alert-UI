import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable()
export class HomeService {

  constructor(private _http: HttpService) { }

  getStudents() {
   return this._http.get("/api/students");
  }
}
