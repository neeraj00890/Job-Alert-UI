import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthService, private _commonService: CommonService) { }
  
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  registerForm: FormGroup = new FormGroup(
    {
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.pattern(this.emailregex)]),
      'firstname': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'phoneNo': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, this.checkPassword]),
      'role': new FormControl(null, [Validators.required]),
    }
  );
  fieldRequired: string = "This field is required"
  roles: Array<{
    name: String,
    label: String,
  }> = [
      {
        label: "Admin",
        name: "ROLE_ADMIN",
      },
      {
        label: "Student",
        name: "ROLE_STUDENT",
      }
    ];

  ngOnInit() {
  }

  emaiErrors() {
    return this.registerForm.get('email')?.hasError('required') ? 'This field is required' :
      this.registerForm.get('email')?.hasError('pattern') ? 'Not a valid emailaddress' : ''
  }

  checkPassword(control: FormControl) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  getErrorPassword() {
    return this.registerForm.get('password')?.hasError('required') ? 'This field is required (The password must be at least six characters, one uppercase letter and one number)' :
      this.registerForm.get('password')?.hasError('requirements') ? 'Password needs to be at least six characters, one uppercase letter and one number' : '';
  }

  checkValidation(input: string) {
    const validation = this.registerForm.get(input)?.invalid && (this.registerForm.get(input)?.dirty || this.registerForm.get(input)?.touched)
    return validation;
  }

  async onSubmit(formData: FormGroup, formDirective: FormGroupDirective) {
    try {
      await this.auth.registerUser(formData.value)
    } catch (error) {
      this._commonService.openSnackBar(error.error.message);
    }
  }
}
