import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lang-nav',
  templateUrl: './lang-nav.component.html',
  styleUrls: ['./lang-nav.component.scss']
})
export class LangNavComponent implements OnInit {
  currentLang: string;
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.listenToCurrentLang();
  }
  onLangChange(lang: string) {
    this.translateService.setDefaultLang(lang);
  }
  listenToCurrentLang() {
   this.translateService.onDefaultLangChange.subscribe(res => {
     if (res) {
     this.currentLang = res['lang'];
     }
   });
  }

}
