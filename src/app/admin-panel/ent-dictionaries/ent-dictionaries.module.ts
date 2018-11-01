import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntDictionariesComponent } from './ent-dictionaries.component';
import { EntDictionariesRoutes } from './ent-dictionaries.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { DictionariesInsertDialogComponent } from './dictionaries-insert-dialog/dictionaries-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EntDictionariesRoutes,
    SharedAdminModule,
  ],
  declarations: [EntDictionariesComponent, DictionariesInsertDialogComponent],
  entryComponents: [DictionariesInsertDialogComponent]
})
export class EntDictionariesModule { }
