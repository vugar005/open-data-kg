import { MultiLangInsertComponent } from './multi-lang-insert/multi-lang-insert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntMultiLangComponent } from './ent-multi-lang.component';
import { EntMultiLangRoutes } from './ent-multi-lang.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntMultiLangRoutes
  ],
  declarations: [EntMultiLangComponent, MultiLangInsertComponent],
  entryComponents: [MultiLangInsertComponent]
})
export class EntMultiLangModule { }
