import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Login } from 'src/app/types/loginDto';
import { Signup } from 'src/app/types/signup';


@Injectable()
export class AuthService {

  constructor(private httpService: HttpService) {

  }

  registerUser(payload: Signup): Promise<any>  {
    return this.httpService.post('/signup', payload)
  }

  loginUser(payload: Login): Promise<any> {
    return this.httpService.post("/authenticate", payload);
  }
}
