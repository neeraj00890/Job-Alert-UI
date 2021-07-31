import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms'
import { Router } from '@angular/router';
import { Login } from 'src/app/types/loginDto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logIn',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    'username': new FormControl(null),
    'password': new FormControl(null)
  })

  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }

  async onSubmit(formData: FormGroup) {
    try {
      const loginPayload = formData.value as Login;
      await this.auth.loginUser(loginPayload);
      this.router.navigate(["home"]);
    } catch (error) {
      console.log(error);
    }
  }

  OnRegistrationClick() {
    this.router.navigate(['sign-up'])
  }

}
