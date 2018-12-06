import { Routes, RouterModule } from '@angular/router';
import { DatasetByCatComponent } from './dataset-by-cat/dataset-by-cat.component';
import { DatasetByOrgComponent } from './dataset-by-org/dataset-by-org.component';
import { DatasetSearchResultComponent } from './dataset-search-result/dataset-search-result.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'by-category', pathMatch: 'full'},
  { path: 'by-category', component: DatasetByCatComponent, data: { breadcrumb: 'by-category'} },
  {path: 'by-organization', component: DatasetByOrgComponent, data: {breadcrumb: 'by organization'}},
  {path: 'searchResults', component: DatasetSearchResultComponent},
  {path: ':id/details', component: DatasetDetailComponent, data: {breadcrumb: 'details'}}
];

export const DatasetsRoutes = RouterModule.forChild(routes);
