import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [
    StarRatingComponent
  ],
  exports: [StarRatingComponent]
})
export class StarRatingModule {}
