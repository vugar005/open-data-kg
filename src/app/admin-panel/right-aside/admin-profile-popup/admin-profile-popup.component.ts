import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model.';
import { getUser, getApiUrl } from 'src/app/auth/store/auth.selectors';
import { first } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInRight, fadeOutRight, fadeOutLeft } from 'ng-animate';
import { Router } from '@angular/router';
import { Logout } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'admin-profile-popup',
  templateUrl: './admin-profile-popup.component.html',
  styleUrls: ['./admin-profile-popup.component.scss'],
  animations: [
    trigger('fadeInRight', [transition(':enter', useAnimation(fadeInRight, {params: {timing: 0.5}}))]),
    trigger('fadeOutRight', [transition(':leave', useAnimation(fadeOutLeft, {params: {timing: 0.3}}))]),
  ]
})
export class AdminProfilePopupComponent implements OnInit {
  user: User;
  apiUrl$: Observable<string>;
  @Output() dialogClose = new EventEmitter();
 // @HostBinding('@fadeInRight') fadeInRight = true;
  // @HostBinding('@fadeOutRight') fadeOutRight = true;
  constructor(private store: Store<AppState>, private router: Router) {
    this.apiUrl$ = store.select(getApiUrl);
   }

  ngOnInit() {
    this.store.select(getUser).pipe(first())
    .subscribe(res => this.user  = res);
  }
  onLogout() {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('/');
  }

}
