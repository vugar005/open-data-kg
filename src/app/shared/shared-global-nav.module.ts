import { SharedTranslateModule } from './shared-translate.module';
import { LangNavComponent } from './../lang-nav/lang-nav.component';
import { CommonModule } from '@angular/common';
import { GlobalNavComponent } from './../global-nav/global-nav.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [GlobalNavComponent, LangNavComponent],
  imports: [CommonModule, SharedTranslateModule], // temp
  exports: [GlobalNavComponent, LangNavComponent]
})

export class SharedGlobalNavModule {}
