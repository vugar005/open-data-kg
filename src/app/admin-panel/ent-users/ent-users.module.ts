import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntUsersComponent } from './ent-users.component';
import { EntUsersRoutes } from './ent-users.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';
import { MatIconModule, MatDatepickerModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MatMomentDateModule,  MomentDateAdapter } from '@angular/material-moment-adapter';
export const MY_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
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
  exports: [UserInsertDialogComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'az' },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class EntUsersModule { }
