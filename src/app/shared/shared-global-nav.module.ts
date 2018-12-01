import { CommonModule } from '@angular/common';
import { GlobalNavComponent } from './../global-nav/global-nav.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [GlobalNavComponent],
  imports: [CommonModule],
  exports: [GlobalNavComponent]
})

export class SharedGlobalNavModule {}
