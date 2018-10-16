import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '', component: BlogListComponent, pathMatch: 'full',

   },
];

export const BlogRoutes = RouterModule.forChild(routes);
