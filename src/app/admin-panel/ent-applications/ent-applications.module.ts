import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntApplicationsComponent } from './ent-applications.component';
import { EntApplicationsRoutes } from './ent-applications.routing';
import { NtTableModule } from 'nt-table';
import { SharedAdminModule } from '../shared/shared-admin.module';

@NgModule({
  imports: [
    CommonModule,
    EntApplicationsRoutes,
    SharedAdminModule,
    NtTableModule
  ],
  declarations: [EntApplicationsComponent]
})
export class EntApplicationsModule { }
