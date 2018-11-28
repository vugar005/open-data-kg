import { Routes, RouterModule } from '@angular/router';
import { EntCommentsComponent } from './ent-comments.component';

const routes: Routes = [
  { path: '', component: EntCommentsComponent },
];

export const EntCommentsRoutes = RouterModule.forChild(routes);
