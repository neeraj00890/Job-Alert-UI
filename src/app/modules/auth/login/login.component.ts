import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Login } from 'src/app/types/loginDto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logIn',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    'username': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required])
  })

  constructor(private router: Router,
    private auth: AuthService,
    private _commonService: CommonService) { }

  ngOnInit() {
  }

  async onSubmit(formData: FormGroup) {
    try {
      const loginPayload = formData.value as Login;
      const response: any = await this.auth.loginUser(loginPayload);
      localStorage.setItem("token", response.token);
      this.router.navigate(["home"]);
    } catch (error) {
      this._commonService.openSnackBar(error.error.message);
    }
  }

  checkValidation(input: string) {
    const validation = this.loginForm.get(input)?.invalid && (this.loginForm.get(input)?.dirty || this.loginForm.get(input)?.touched)
    return validation;
  }

  OnRegistrationClick() {
    this.router.navigate(['sign-up'])
  }

}
