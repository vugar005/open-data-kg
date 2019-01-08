import { EntNewsComponent } from './ent-news.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: EntNewsComponent },
];

export const EntNewsRoutes = RouterModule.forChild(routes);
