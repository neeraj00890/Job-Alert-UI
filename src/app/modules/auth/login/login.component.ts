import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  })

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData: FormGroup, loginDirective: FormGroupDirective) {
    const email = formData.value.email;
    const password = formData.value.password;
  }

  OnRegistrationClick() {
    this.router.navigate(['sign-up'])
  }

}
