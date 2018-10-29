import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntApplicationsComponent } from './ent-applications.component';
import { EntApplicationsRoutes } from './ent-applications.routing';
import { NtTableModule } from 'nt-table';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { ApplicationsInsertDialogComponent } from './applications-insert-dialog/applications-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EntApplicationsRoutes,
    SharedAdminModule,
    NtTableModule
  ],
  declarations: [EntApplicationsComponent, ApplicationsInsertDialogComponent],
  entryComponents: [ApplicationsInsertDialogComponent]
})
export class EntApplicationsModule { }
