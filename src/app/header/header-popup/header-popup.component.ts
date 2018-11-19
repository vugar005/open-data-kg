import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Logout } from 'src/app/auth/store/auth.actions';
import {fadeIn, bounce} from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  selector: 'header-popup',
  templateUrl: './header-popup.component.html',
  styleUrls: ['./header-popup.component.scss'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {params: {timing: 5}}))]),
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class HeaderPopupComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  faTimes = faTimes;
  fadeIn = fadeIn;
 // @HostBinding('@bounce') routeAnimation = true;
  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
  }
onNavigate(route: string) {
  this.close.next();
 this.router.navigateByUrl(route);
}
onLogout() {
  this.close.next();
this.store.dispatch(new Logout());
}
}
