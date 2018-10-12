import { Component, OnInit, HostBinding } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { SetToken, TryLogin } from '../store/auth.actions';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
  ]
})
export class LoginComponent implements OnInit {
  @HostBinding('@fadeIn') animate = true;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  onTryLogin() {
    this.store.dispatch(new TryLogin());
    this.store.dispatch(new SetToken('12345'));
  }

}
