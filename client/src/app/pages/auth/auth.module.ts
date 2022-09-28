import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login-page/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SingupPageComponent } from './pages/singup-page/singup-page.component';
import { MaterialModule } from '../../material/material.module';
import { SingupFormComponent } from './components/singup-form/singup-form.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    SingupPageComponent,
    SingupFormComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, LoginRoutingModule, MaterialModule],
})
export class AuthModule {}
