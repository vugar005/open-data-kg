import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getHeaderClass, getGlobalNavClass } from './shared/store/ui.selectors';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SetToken, SetUser, AutoSetToken, AutoSetUser } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'open-data-kg';
  headerClass$: Observable<string>;
  globalNavClass$: Observable<string>;

  constructor(
    private translateService: TranslateService,
    private store: Store<AppState>,
    private jwtService: JwtHelperService
     ) {
  }
  ngOnInit() {
    this.tryAutoLogin();
    this.translateService.setDefaultLang('en');
    this.headerClass$ = this.store.select(getHeaderClass);
  }
  tryAutoLogin() {
   try {
    const jwtToken = localStorage.getItem('kg-token');
    const user = JSON.parse(localStorage.getItem('kg-user'));
    if (!(jwtToken && user)) {
        return;
    }
    const isExpired = this.jwtService.isTokenExpired(jwtToken);
  //  if (isExpired) {return; }
    const decoded = this.jwtService.decodeToken(jwtToken);
    if (!decoded) {return; }
    this.store.dispatch(new AutoSetToken(decoded));
    this.store.dispatch(new AutoSetUser(user));
   } catch (er) {
     console.log(er)
   }
  }
}
