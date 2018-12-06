import { AppState } from 'src/app/reducers';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { SetAppLanguage } from '../shared/store/ui.actions';

@Component({
  selector: 'lang-nav',
  templateUrl: './lang-nav.component.html',
  styleUrls: ['./lang-nav.component.scss']
})
export class LangNavComponent implements OnInit {
  currentLang: string;
  constructor(private translateService: TranslateService, private store: Store<AppState>) { }

  ngOnInit() {
    this.listenToCurrentLang();
  }
  onLangChange(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.store.dispatch(new SetAppLanguage(lang));
    localStorage.setItem('kg-language', lang);
  }
  listenToCurrentLang() {
   this.translateService.onDefaultLangChange.subscribe(res => {
     if (res) {
     this.currentLang = res['lang'];
     }
   });
  }

}
