import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntOrganizationsComponent } from './ent-organizations.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { OrganizationInsertDialogComponent } from './organization-insert-dialog/organization-insert-dialog.component';
import { EntOrganizationsRoutes } from './ent-organizations.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntOrganizationsRoutes
  ],
  declarations: [EntOrganizationsComponent, OrganizationInsertDialogComponent],
  entryComponents: [OrganizationInsertDialogComponent]
})
export class EntOrganizationsModule { }
