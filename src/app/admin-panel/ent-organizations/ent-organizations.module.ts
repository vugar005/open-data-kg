import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntOrganizationsComponent } from './ent-organizations.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { OrganizationInsertDialogComponent } from './organization-insert-dialog/organization-insert-dialog.component';
import { EntOrganizationsRoutes } from './ent-organizations.routing';
import {  MatTabsModule } from '@angular/material';
import { OrgAddressInsertComponent } from './organization-insert-dialog/org-address-insert/org-address-insert.component';
import { OrgContactInsertComponent } from './organization-insert-dialog/org-contact-insert/org-contact-insert.component';


@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    MatTabsModule,
    EntOrganizationsRoutes,
  ],
  declarations: [
    EntOrganizationsComponent,
    OrganizationInsertDialogComponent,
    OrgAddressInsertComponent,
    OrgContactInsertComponent
  ],
  entryComponents: [
    OrganizationInsertDialogComponent,
    OrgAddressInsertComponent,
    OrgContactInsertComponent
  ]
})
export class EntOrganizationsModule { }
