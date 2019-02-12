import { AppState } from 'src/app/reducers';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from 'src/app/auth/store/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn, isAdmin } from 'src/app/auth/store/auth.selectors';
import { SetHeaderPopupState } from 'src/app/shared/store/ui.actions';

@Component({
  selector: 'header-popup',
  templateUrl: './header-popup.component.html',
  styleUrls: ['./header-popup.component.scss']
})
export class HeaderPopupComponent implements OnInit {
  open: boolean;
  @Output() close = new EventEmitter<void>();
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  constructor(private router: Router, private store: Store<AppState>) {
    this.isLoggedIn$ = store.select(isLoggedIn);
    this.isAdmin$ =  this.store.select(isAdmin);
   }


  ngOnInit() {
    setTimeout(() => this.open = true, 50);
  }
  onNavigate(route: string, type: string) {
    this.close.next();
    this.store.dispatch(new SetHeaderPopupState(false));
    /** Timeout because of header animation */
    this.router.navigate([route], {queryParams: {type: type}});
  }
  onLogout() {
    this.close.next();
  this.store.dispatch(new Logout());
  }
  onClose(el: HTMLElement) {
    this.open = false;
    this.close.next();
  }
}
