import { LatestDatasetsComponent } from './../global-nav/latest-datasets/latest-datasets.component';
import { DatasetGroupListComponent } from './dataset-group-list/dataset-group-list.component';
import { Routes, RouterModule } from '@angular/router';
import { DatasetByCatComponent } from './dataset-by-cat/dataset-by-cat.component';
import { DatasetByOrgComponent } from './dataset-by-org/dataset-by-org.component';
import { DatasetSearchResultComponent } from './dataset-search-result/dataset-search-result.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { DatasetFilePreviewComponent } from './dataset-file-preview/dataset-file-preview.component';
import { PopularDatasetsComponent } from '../global-nav/popular-datasets/popular-datasets.component';

const routes: Routes = [
  {path: '', redirectTo: 'by-category', pathMatch: 'full'},
  { path: 'by-category', component: DatasetByCatComponent, data: { breadcrumb: 'by-category'}, children: [
    {path: ':id', component: DatasetGroupListComponent, pathMatch: 'full', data: {type: 'category'}},
    {path: ':id/:id', component: DatasetDetailComponent, data: {isInner: true}}
  ] },
  {path: 'by-organization', component: DatasetByOrgComponent, data: {breadcrumb: 'by organization'}, children: [
    {path: ':id', component: DatasetGroupListComponent, pathMatch: 'full', data: {type: 'organization'}},
    {path: ':id/:id', component: DatasetDetailComponent, data: {isInner: true}}
  ]},
  {path: 'by-latest/:id', component: LatestDatasetsComponent},
  {path: 'by-popular/:id', component: PopularDatasetsComponent},
  {path: ':id/resources', component: DatasetFilePreviewComponent},
  {path: 'searchResults', component: DatasetSearchResultComponent},
  {path: ':id', component: DatasetDetailComponent, data: {breadcrumb: 'details'}}
];

export const DatasetsRoutes = RouterModule.forChild(routes);
