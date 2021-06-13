import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Signup } from 'src/app/types/signup';


@Injectable()
export class AuthService {

  constructor(private httpService: HttpService) { 

  }

  registerUser(payload: Signup) {
     return this.httpService.post('/signup', payload)
  }
}
