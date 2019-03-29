import { PopularDatasetsComponent } from './popular-datasets/popular-datasets.component';
import { LatestDatasetsComponent } from './latest-datasets/latest-datasets.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { NgModule } from '@angular/core';
import { OrganizationOverviewComponent } from './organization-overview/organization-overview.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImgSrcPipeModule } from '../shared/pipes/img-src-pipe.module';
import { DatasetStatisticsComponent } from './popular-datasets/dataset-statistics/dataset-statistics.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { MatTabsModule } from '@angular/material';
import { TableStatisticsComponent } from './popular-datasets/table-statistics/table-statistics.component';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ImgSrcPipeModule,
    FusionChartsModule,
    MatTabsModule
  ],
  declarations: [
    CategoryOverviewComponent,
    LatestDatasetsComponent,
    OrganizationOverviewComponent,
    PopularDatasetsComponent,
    DatasetStatisticsComponent,
    TableStatisticsComponent,
  ],
  exports: [
    CategoryOverviewComponent,
    LatestDatasetsComponent,
    OrganizationOverviewComponent,
    PopularDatasetsComponent,
    FusionChartsModule,
    MatTabsModule
  ]
})
export class GlobalNavModule {}
