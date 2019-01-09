import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-list/news-detail/news-detail.component';

const routes: Routes = [
  { path: '', component: NewsListComponent, pathMatch: 'full'},
   { path: ':id', component: NewsDetailComponent }
];

export const NewsRoutes = RouterModule.forChild(routes);
