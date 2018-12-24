import { DatasetBoxComponent } from './dataset-box/dataset-box.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarRatingModule } from '../shared/star-rating.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, StarRatingModule, RouterModule],
  declarations: [
    DatasetBoxComponent
  ],
  exports: [DatasetBoxComponent]
})
export class DatasetBoxModule {}
