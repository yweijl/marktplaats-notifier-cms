import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterDto, LoginDto } from '../http.clients/api.client'
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'userName': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onRegister() {
    this.authenticationService.register(new RegisterDto({
      email: this.getFormValue('email'),
      username: this.getFormValue('userName'),
      password: this.getFormValue('password')
    }));

    this.signinForm.reset();
  }

  onLogin() {
    this.authenticationService.login(new LoginDto({
      username: this.getFormValue('userName'),
      password: this.getFormValue('password')
    }));

    this.signinForm.reset();
  }

  getFormValue(key: string) {
    return this.signinForm.get(key).value
  }
}
