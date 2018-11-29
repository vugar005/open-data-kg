import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntUsersComponent } from './ent-users.component';
import { EntUsersRoutes } from './ent-users.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';
import { MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EntUsersRoutes,
    SharedAdminModule,
    MatIconModule,
  ],
  declarations: [EntUsersComponent, UserInsertDialogComponent],
  entryComponents: [UserInsertDialogComponent],
  exports: [UserInsertDialogComponent],
})
export class EntUsersModule { }
