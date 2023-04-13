import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import {  UserCreateResponse } from '@asseco/api-client';
import { AuthStore } from '../auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
  providers:[AuthStore]
})
export class LoginPage {

  private fb = inject(NonNullableFormBuilder);
  store = inject(AuthStore);
  error$ = this.store.error$;
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email], []],
    password: ['', [Validators.required, Validators.minLength(4)], []],
  });
  submit() {
    console.log('submit');
    console.log(this.form);
    this.store.login(this.form.value as UserCreateResponse);
  }

}
