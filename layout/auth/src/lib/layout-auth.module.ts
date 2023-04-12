import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { layoutAuthRoutes } from './lib.routes';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { HomePage } from './home/home.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(layoutAuthRoutes),
    RouterModule.forChild(layoutAuthRoutes),
  ],
  declarations: [
    LoginPage,
    RegisterPage,
    HomePage
  ],
})
export class LayoutAuthModule {}
