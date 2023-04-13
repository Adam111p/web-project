import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthStore } from '../auth.store';
import { UserCreateDto } from '@asseco/api-client';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
  providers: [AuthStore],
})
export class RegisterPage {
  private fb = inject(NonNullableFormBuilder);
  store = inject(AuthStore);
  error$ = this.store.error$;
  form = this.fb.group({
    name: ['', [Validators.required], []],
    email: ['', [Validators.required, Validators.email], []],
    password: ['', [Validators.required, Validators.minLength(4)], []],
  });
  submit() {
    console.log('submit');
    console.log(this.form);
    this.store.register(this.form.value as UserCreateDto);
  }
}
