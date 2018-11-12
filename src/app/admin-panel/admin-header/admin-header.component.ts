import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model.';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { isLoggedIn, getUser } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  globalNavClass$: Observable<string>;
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;
  constructor(private store: Store<AppState>) {
    this.isLoggedIn$ = store.select(isLoggedIn);
    this.user$ = store.select(getUser);
  }

  ngOnInit() {
  }

}
