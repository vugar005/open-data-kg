import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getHeaderClass, getGlobalNavClass } from './shared/store/ui.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'open-data-kg';
  headerClass$: Observable<string>;
  globalNavClass$: Observable<string>;
  constructor(private translateService: TranslateService, private store: Store<AppState>) {
  }
  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.headerClass$ = this.store.select(getHeaderClass);
    this.globalNavClass$ = this.store.select(getGlobalNavClass);
  }
}
