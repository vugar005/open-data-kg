import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator.component';
import { NgxDropdownModule } from '../dropdown/dropdown.module';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { CommonModule } from '@angular/common';
// import { NgxDropdownModule } from 'ngx-simple-dropdown';

@NgModule({
  imports: [
    CommonModule,
    NgxDropdownModule,
    SharedTranslateModule
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent]
})
export class NgxPaginatorModule { }
