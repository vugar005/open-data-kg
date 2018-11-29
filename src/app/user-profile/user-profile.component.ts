import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../auth/models/user.model.';
import { getUser } from '../auth/store/auth.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 user$: Observable<User>;
  constructor(private store: Store<AppState>) {
    this.user$ = store.select(getUser);
    this.user$.subscribe(res => console.log(res))
  }

  ngOnInit() {
  }

}
