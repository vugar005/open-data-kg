import { Routes, RouterModule } from '@angular/router';
import { EntApplicationsComponent } from './ent-applications.component';

const routes: Routes = [
  { path: '', component: EntApplicationsComponent} ,
];

export const EntApplicationsRoutes = RouterModule.forChild(routes);
