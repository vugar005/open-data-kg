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
    this.currentLang = this.translateService.getDefaultLang();
  }
  onLangChange(lang: string) {
    this.currentLang = undefined;
    this.translateService.setDefaultLang(lang);
    this.store.dispatch(new SetAppLanguage(lang));
    localStorage.setItem('kg-language', lang);
    location.reload();
  }
  listenToCurrentLang() {
   this.translateService.onDefaultLangChange.subscribe(res => {
     if (res) {
    setTimeout(() => {
      this.currentLang = res['lang'];
    }, 100);
     }
   });
  }

}
