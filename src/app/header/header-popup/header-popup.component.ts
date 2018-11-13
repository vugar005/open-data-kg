import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Logout } from 'src/app/auth/store/auth.actions';
@Component({
  selector: 'header-popup',
  templateUrl: './header-popup.component.html',
  styleUrls: ['./header-popup.component.scss']
})
export class HeaderPopupComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  faTimes = faTimes;
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
