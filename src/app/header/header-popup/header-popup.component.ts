import { Component, OnInit, Output, EventEmitter, HostBinding, ElementRef } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Logout } from 'src/app/auth/store/auth.actions';
import {fadeIn, bounce} from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Observable } from 'rxjs';
import { isLoggedIn, isAdmin } from 'src/app/auth/store/auth.selectors';
@Component({
  selector: 'header-popup',
  templateUrl: './header-popup.component.html',
  styleUrls: ['./header-popup.component.scss'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {params: {timing: 5}}))]),
  ]
})
export class HeaderPopupComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  faTimes = faTimes;
  fadeIn = fadeIn;
  ready = true;
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
 // @HostBinding('@bounce') routeAnimation = true;
  constructor(private router: Router, private store: Store<AppState>) {
    this.isLoggedIn$ = store.select(isLoggedIn);
    this.isAdmin$ =  this.store.select(isAdmin);
   }

  ngOnInit() {
    setTimeout(() => this.ready = true, 1500);
  }
onNavigate(route: string) {
  this.close.next();
 this.router.navigateByUrl(route);
}
onLogout() {
  this.close.next();
this.store.dispatch(new Logout());
}
onClose(el: HTMLElement) {
  this.close.next();
  // el.style.animationDirection = 'reverse';
  // el.style.animation = 'checked-anim 1s ease both';
  // setTimeout(() => this.close.next(), 300);
}
}
