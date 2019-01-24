import { AutoSetUser } from './../../auth/store/auth.actions';
import { AppState } from './../../reducers/index';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SetUser } from 'src/app/auth/store/auth.actions';
import { Injectable } from '@angular/core';
@Injectable()
export class UserResolver {
  constructor(private router: Router, private http: HttpClient, private store: Store<AppState>) {}
  resolve(
    route: ActivatedRoute,
    state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> {
    return this.http.post('api/post/user/check', {})
    .pipe(
      map((res: any) => {
        const user = res.data;
        if (user) {
          console.log(user)
          this.store.dispatch(new AutoSetUser(user));
        }
      })
    );
    }
}
