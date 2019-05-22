import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueTranslatePipe } from './value-translate.pipe';

@NgModule({
  declarations: [ValueTranslatePipe],
  imports: [
    CommonModule
  ],
  exports: [ValueTranslatePipe]
})
export class ValueTranslateModule { }
