import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntOrganizationsComponent } from './ent-organizations.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { OrganizationInsertDialogComponent } from './organization-insert-dialog/organization-insert-dialog.component';
import { EntOrganizationsRoutes } from './ent-organizations.routing';
import { OrgAddressContentComponent } from './organization-insert-dialog/org-address-content/org-address-content.component';
import { OrgAddrInsertDialogComponent } from './organization-insert-dialog/org-address-content/org-addr-insert-dialog/org-addr-insert-dialog.component';
import { OrgContactContentComponent } from './organization-insert-dialog/org-contact-content/org-contact-content.component';
import { OrgContactInsertDialogComponent } from './organization-insert-dialog/org-contact-content/org-contact-insert-dialog/org-contact-insert-dialog.component';
import { MatExpansionModule, MatTabsModule } from '@angular/material';


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
    OrgAddressContentComponent,
    OrgAddrInsertDialogComponent,
    OrgContactContentComponent,
    OrgContactInsertDialogComponent
  ],
  entryComponents: [
    OrganizationInsertDialogComponent,
    OrgAddrInsertDialogComponent,
    OrgContactContentComponent,
    OrgContactInsertDialogComponent
  ]
})
export class EntOrganizationsModule { }
