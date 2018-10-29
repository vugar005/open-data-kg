import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserRolesComponent } from './admin-user-roles.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { UserRolesInsertDialogComponent } from './user-roles-insert-dialog/user-roles-insert-dialog.component';
import { AdminUserRolesRoutes } from './admin-user-roles.routing';
import { NtTableModule } from 'nt-table';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    AdminUserRolesRoutes,
    NtTableModule
  ],
  declarations: [AdminUserRolesComponent, UserRolesInsertDialogComponent],
  entryComponents: [UserRolesInsertDialogComponent]
})
export class AdminUserRolesModule { }
