import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({name: 'valueTranslate', pure: false})
export class ValueTranslatePipe implements PipeTransform {
    lang: string;
    constructor(private translateService: TranslateService) {}
  transform(value: any): string {
    if (!value) {return; }
    this.lang = this.translateService.getDefaultLang();
    this.translateService.onDefaultLangChange.subscribe((data) => {
      this.lang = data.lang;
    });
    return value[this.lang];
  }
}