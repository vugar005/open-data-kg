import { DatasetBoxComponent } from './dataset-box.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarRatingModule } from '../../shared/star-rating.module';
import { RouterModule } from '@angular/router';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';

@NgModule({
  imports: [CommonModule, StarRatingModule, RouterModule, SharedTranslateModule],
  declarations: [
    DatasetBoxComponent,
  ],
  exports: [DatasetBoxComponent]
})
export class DatasetBoxModule {}
