import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntUsersComponent } from './ent-users.component';
import { EntUsersRoutes } from './ent-users.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';
import { MatIconModule, MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
  imports: [
    CommonModule,
    EntUsersRoutes,
    SharedAdminModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  declarations: [EntUsersComponent, UserInsertDialogComponent],
  entryComponents: [UserInsertDialogComponent],
  exports: [UserInsertDialogComponent]
})
export class EntUsersModule { }
