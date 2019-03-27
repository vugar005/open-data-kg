import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-list/news-detail/news-detail.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {path: '', component: NewsComponent, data: {breadcrumb: 'news'}, children: [
    { path: '', component: NewsListComponent, pathMatch: 'full', data: {state: 'news-list'}},
    { path: ':id', component: NewsDetailComponent }
  ]}
];

export const NewsRoutes = RouterModule.forChild(routes);
