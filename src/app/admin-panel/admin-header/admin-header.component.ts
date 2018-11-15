import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model.';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { isLoggedIn, getUser } from 'src/app/auth/store/auth.selectors';
import { Logout } from 'src/app/auth/store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  globalNavClass$: Observable<string>;
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;
  showMenu: boolean;
  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoggedIn$ = store.select(isLoggedIn);
    this.user$ = store.select(getUser);
  }

  ngOnInit() {
  }
  onLogout() {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('/');
  }
}
