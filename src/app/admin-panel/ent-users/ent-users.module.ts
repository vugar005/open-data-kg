import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntUsersComponent } from './ent-users.component';
import { EntUsersRoutes } from './ent-users.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { NtTableModule } from 'nt-table';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EntUsersRoutes,
    SharedAdminModule,
    NtTableModule
  ],
  declarations: [EntUsersComponent, UserInsertDialogComponent],
  entryComponents: [UserInsertDialogComponent],
  exports: [UserInsertDialogComponent]
})
export class EntUsersModule { }
