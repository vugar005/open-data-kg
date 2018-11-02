import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { MatIconModule } from '@angular/material';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', fromAuth.reducer),
    RouterModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }})
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: []
})
export class AuthModule { }
