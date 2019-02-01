import { PopularDatasetsComponent } from './popular-datasets/popular-datasets.component';
import { LatestDatasetsComponent } from './latest-datasets/latest-datasets.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { NgModule } from '@angular/core';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImgSrcPipeModule } from '../shared/pipes/img-src-pipe.module';

@NgModule({
  imports: [CommonModule, RouterModule, ImgSrcPipeModule],
  declarations: [
    CategoryOverviewComponent,
    LatestDatasetsComponent,
    OrganizationOverviewComponent,
    PopularDatasetsComponent,
  ],
  exports: [
    CategoryOverviewComponent,
    LatestDatasetsComponent,
    OrganizationOverviewComponent,
    PopularDatasetsComponent,
  ]
})
export class GlobalNavModule {}
