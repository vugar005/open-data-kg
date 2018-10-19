import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {path: '', component: BlogComponent, children: [
      {path: '', component: BlogListComponent, pathMatch: 'full'},
      { path: ':id', component: BlogDetailComponent},
    ]
   },
];

export const BlogRoutes = RouterModule.forChild(routes);
