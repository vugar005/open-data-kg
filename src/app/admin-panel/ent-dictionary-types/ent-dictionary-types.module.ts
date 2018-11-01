import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntDictionaryTypesComponent } from './ent-dictionary-types.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { EntDictionaryTypesRoutes } from './ent-dictionary-types.routing';
import { DictionaryTypeInsertDialogComponent } from './dictionary-type-insert-dialog/dictionary-type-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EntDictionaryTypesRoutes,
    SharedAdminModule,
  ],
  declarations: [EntDictionaryTypesComponent, DictionaryTypeInsertDialogComponent],
  entryComponents: [DictionaryTypeInsertDialogComponent]
})
export class EntDictionaryTypesModule { }
