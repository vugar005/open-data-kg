import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatDatepickerModule} from '@angular/material';
import {MatDialogModule, MatMenuModule, MatStepperModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { SharedService } from './shared/shared.service';
import { SharedUploadModule } from './shared/shared-upload.module';

export const MY_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};
@NgModule({
 imports: [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule,
  MatStepperModule,

 ],
 exports: [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule,
  MatStepperModule
 ],
 providers: [
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  { provide: MAT_DATE_LOCALE,
    deps: [SharedService],
    useFactory: (sharedService) => sharedService.getCurentLocale()
  },
 ]
})
export class MaterialModule {}
