import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  {
    path: '', component: NewsListComponent, pathMatch: 'full',
   },
];

export const NewsRoutes = RouterModule.forChild(routes);
