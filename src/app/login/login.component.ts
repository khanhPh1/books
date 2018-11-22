import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../assets/fonts/iconic/css/material-design-iconic-font.min.css'
  ]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.maxLength(32), Validators.required]),
    password: new FormControl('', [Validators.maxLength(32), Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    // TO DO
    // CALL LOGIN FUNCTION
    this.router.navigate(['admin/dashboard']);
  }

}
