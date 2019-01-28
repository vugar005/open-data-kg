import { SetAppLanguage } from './shared/store/ui.actions';
import { SharedService } from './shared/shared.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { Observable, fromEvent } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AutoSetToken, SetApiUrl, SetModules, SetUser } from './auth/store/auth.actions';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { getHostname } from './app.utils';
import cssVars from 'css-vars-ponyfill';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'open-data-kg';
  headerClass$: Observable<string>;
  globalNavClass$: Observable<string>;
  root: HTMLElement;
  constructor(
    private translateService: TranslateService,
    private store: Store<AppState>,
    private jwtService: JwtHelperService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
     ) {
     setTimeout(() => {
    //  cssVars();
     }, 3000)
  }
  ngOnInit() {
    this.setHostname();
    this.tryAutoLogin();
    this.setDefaultLang();
    this.listenToOnlineChanges();
 //   this.initBreadCrumb();
  }
  initBreadCrumb() {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(event =>  this.sharedService.buildBreadCrumb(this.route.root))
    ).subscribe(res => console.log(res));
  }
  listenToOnlineChanges() {
    this.root = document.documentElement;
    fromEvent(window, 'offline')
    .subscribe(res => {
      this.root.style.setProperty('--kg-background-image', 'linear-gradient(to right,#84817a, #aaa69d)');
      this.root.style.setProperty('--kg-box-background', '#84817a');
      this.root.style.setProperty('--kg-wrapper-background', '#84817a');
    });
    fromEvent(window, 'online')
    .subscribe(res => {
      this.root.style.setProperty('--kg-background-image', 'linear-gradient(to right, #4e8ec8, #47a8c5)');
      this.root.style.setProperty('--kg-box-background', '#ffffff');
      this.root.style.setProperty('--kg-wrapper-background', '#f5f6fa');
    });
  }
  tryAutoLogin() {
   try {
    const jwtToken = localStorage.getItem('kg_token');
    if (!(jwtToken)) {
        return;
    }
    const isExpired = this.jwtService.isTokenExpired(jwtToken);
  //  if (isExpired) {return; }
    const decoded = this.jwtService.decodeToken(jwtToken);
    if (!decoded) {return; }
    this.store.dispatch(new AutoSetToken({jwtToken, decoded}));
   } catch (er) {
     console.log(er);
   }
  }
 setHostname() {
   const URL = getHostname();
   localStorage.setItem('kg_hostname', URL);
    this.store.dispatch(new SetApiUrl(URL));
  }
  setDefaultLang() {
    const language = localStorage.getItem('kg-language') || 'en';
    this.translateService.setDefaultLang(language);
    this.store.dispatch(new SetAppLanguage(language));
  }

}
