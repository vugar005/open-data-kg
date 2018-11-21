import { Routes, RouterModule } from '@angular/router';
import { OrganizationsComponent } from './organizations.component';

const routes: Routes = [
  { path: '', component: OrganizationsComponent}
];

export const OrganizationRoutes = RouterModule.forChild(routes);
