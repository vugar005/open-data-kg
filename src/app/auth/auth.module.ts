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
import { MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,
  MatButtonModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { WaveParticlesModule } from '../home/landing-page/wave-particles/wave-particles.module';
import { SharedTranslateModule } from '../shared/shared-translate.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', fromAuth.reducer),
    RouterModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    WaveParticlesModule,
    SharedTranslateModule,
    PerfectScrollbarModule,
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
  entryComponents: [],
  providers: []
})
export class AuthModule { }
