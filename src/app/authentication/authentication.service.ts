import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationClient, LoginDto, RegisterDto} from '../http.clients/api.client';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private _token:string;

    get token():string {
        return this._token;
    }

    constructor(private router:Router, private authenticationClient:AuthenticationClient){
        this._token =localStorage.getItem('token');
    }

    redirectToLogin(){
        this.router.navigate(['/login']);
    }

    register(registerDto:RegisterDto){
        this.authenticationClient
        .register(registerDto)
        .subscribe(response => {
            this._token = response;
            localStorage.setItem('token', this._token);
            this.router.navigate(['/dashboard']);
        }, error => {
        console.log(error.response);
      });
    }

    login(loginDto:LoginDto){
        this.authenticationClient
        .login(loginDto)
        .subscribe(response => {
            this._token = response;
            localStorage.setItem('token', this._token);
            this.router.navigate(['/dashboard']);
        }, error => {
        console.log(error.response);
      });
    }
}