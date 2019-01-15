import { EntSharingCommentsComponent } from './ent-sharing-comments.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: EntSharingCommentsComponent },
];

export const SharingCommentsRoutes = RouterModule.forChild(routes);
