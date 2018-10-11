import { Component, OnInit } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { SetToken, TryLogin } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  onTryLogin() {
    this.store.dispatch(new TryLogin());
    this.store.dispatch(new SetToken('12345'));
  }

}
