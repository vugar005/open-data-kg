import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTranslateModule } from '../../shared-translate.module';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedTranslateModule,
    RouterModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
