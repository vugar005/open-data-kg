import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AutoSetToken, AutoSetUser, SetApiUrl, SetModules } from './auth/store/auth.actions';
import * as globalVars from './app.globals';
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
    this.setHostname();
    this.tryAutoLogin();
    this.setDefaultLang();
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
    this.store.dispatch(new AutoSetToken({jwtToken, decoded}));
    this.store.dispatch(new AutoSetUser(user));
    this.store.dispatch(new SetModules(user));
   } catch (er) {
     console.log(er);
   }
  }
 setHostname() {
    const hostname = window.location.hostname;
    let URL =  hostname !== 'localhost' ? `http://${hostname}/DispatcherRest` : globalVars.baseUrl;
    if (URL === 'http://192.168.1.23/DispatcherRest') {
      URL = 'http://192.168.1.23:8080/DispatcherRest';
    }
    if (URL === 'http://185.18.245.89/DispatcherRest') {
      URL = 'http://185.18.245.89:9090/DispatcherRest';
    }
    console.log(URL);
    this.store.dispatch(new SetApiUrl(URL));
   // localStorage.setItem('uni_hostname', URL);
  }
  setDefaultLang() {
    this.translateService.setDefaultLang('en');
  }
}
