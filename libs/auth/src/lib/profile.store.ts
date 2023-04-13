import { ComponentStore } from '@ngrx/component-store';
import { User } from '@asseco/api-client';
import { Injectable } from '@angular/core';
export interface ProfileState {
  accessToken: string;
  user: User | null;
}
const initProfile: ProfileState = {
  accessToken: '',
  user: null,
};

@Injectable({providedIn:'root'})
export class ProfileStore extends ComponentStore<ProfileState> {
  constructor() {
    super(initProfile);
  }
    user$ = this.select(state => state.user);

    get accessToken() {
        return this.get().accessToken;
    }
}
