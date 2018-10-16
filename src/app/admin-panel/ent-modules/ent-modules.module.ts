import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntModulesComponent } from './ent-modules.component';
import { EntModulesRoutes } from './ent-modules.routing';
import { NtTableModule } from 'nt-table';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { ModulesInsertDialogComponent } from './modules-insert-dialog/modules-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EntModulesRoutes,
    SharedAdminModule,
    NtTableModule,
  ],
  declarations: [EntModulesComponent, ModulesInsertDialogComponent],
  entryComponents: [ModulesInsertDialogComponent]
})
export class EntModulesModule { }
