import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { isLoggedIn } from './store/auth.selectors';

@Injectable()
class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}
  canActivate(): Observable<boolean>|Promise<boolean>|boolean {
    return this.store.select(isLoggedIn);
  }
}
