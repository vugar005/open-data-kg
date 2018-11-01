import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserRolesComponent } from './admin-user-roles.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { UserRolesInsertDialogComponent } from './user-roles-insert-dialog/user-roles-insert-dialog.component';
import { AdminUserRolesRoutes } from './admin-user-roles.routing';
import { AgGridModule } from 'ag-grid-angular';
import { UserOperationsTableComponent } from './user-operations-table/user-operations-table.component';
import { CheckboxRendererComponent } from './user-operations-table/checkbox-renderer';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    AdminUserRolesRoutes,
    MatCheckboxModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [AdminUserRolesComponent, UserRolesInsertDialogComponent, UserOperationsTableComponent, CheckboxRendererComponent],
  entryComponents: [UserRolesInsertDialogComponent, CheckboxRendererComponent]
})
export class AdminUserRolesModule { }
