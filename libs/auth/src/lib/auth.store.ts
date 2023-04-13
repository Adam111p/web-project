import { ComponentStore } from '@ngrx/component-store';
import { User, UserCreateDto } from '@asseco/api-client';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
export interface AuthState {
  loading: boolean;
  error: any;
}
const initAuth: AuthState = {
  loading: false,
  error: null,
};
@Injectable({ providedIn: 'root' })
export class AuthStore extends ComponentStore<AuthState> {
  private baseUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

  constructor() {
    super(initAuth);
  }

  readonly register = this.effect((data$: Observable<UserCreateDto>) => {
    return data$.pipe(
      switchMap((data) => {
        return this.http
          .post<UserCreateDto>(this.baseUrl + '/register', data)
          .pipe(
            tap({
              subscribe: () => this.patchState({ loading: true }),
              next: (res) => {
                console.log(res);
              },
              error: (error) =>
                this.patchState({ error: error, loading: false }),
            })
          );
      })
    );
  });
}
