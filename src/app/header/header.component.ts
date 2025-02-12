import { Component, OnInit, HostBinding } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn, getUser, getApiUrl } from '../auth/store/auth.selectors';
import { User } from '../auth/models/user.model.';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { fadeIn, zoomOut, zoomIn, fadeOut } from 'ng-animate';
import { SetHeaderPopupState } from '../shared/store/ui.actions';
import { getHeaderPopupState } from '../shared/store/ui.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({height: '0'}),
          animate('300ms', style({height: '70px'}))
        ]),
        transition(':leave', [
          style({height: '70px'}),
          animate('300ms', style({height: '0'}))
        ])
      ]
    )
  ],
})
export class HeaderComponent implements OnInit {
  globalNavClass$: Observable<string>;
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;
  showMenu: boolean;
  apiUrl$: Observable<string>;
  popupState$: Observable<boolean>;
//   @HostBinding('@enterAnimation') enter = 0;
 //  @HostBinding('@fadeOut') leave = true;
  constructor(private store: Store<AppState>) {
    this.isLoggedIn$ = store.select(isLoggedIn);
    this.user$ = store.select(getUser);
    this.apiUrl$ = store.select(getApiUrl);
    this.popupState$ = store.select(getHeaderPopupState);
  }

  ngOnInit() {
 //   setTimeout(() => this.enter = true, 3000)
  }
  onClose() {
       this.showMenu = false;
       this.store.dispatch(new SetHeaderPopupState(this.showMenu));
  }
  togglePopup() {
    this.showMenu = !this.showMenu;
    this.store.dispatch(new SetHeaderPopupState(this.showMenu));
  }

}
