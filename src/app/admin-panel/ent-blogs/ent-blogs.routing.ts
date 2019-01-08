import { Routes, RouterModule } from '@angular/router';
import { EntBlogsComponent } from './ent-blogs.component';

const routes: Routes = [
  { path: '', component: EntBlogsComponent },
];

export const EntBlogsRoutes = RouterModule.forChild(routes);
