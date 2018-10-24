import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn } from '../auth/store/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  globalNavClass$: Observable<string>;
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.isLoggedIn$ = store.select(isLoggedIn);
  }

  ngOnInit() {
  }

}
